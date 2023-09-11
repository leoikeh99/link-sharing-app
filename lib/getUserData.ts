import { ObjectId } from "mongodb";
import clientPromise from "./mongodb";

export default async function getUserData(id?: string) {
  try {
    const client = await clientPromise;
    const db = client.db("link-share");

    if (!id || !id.match(/^[0-9a-fA-F]{24}$/))
      return {
        success: false,
        type: "notFound",
      };

    let user = await db.collection("users").findOne({ _id: new ObjectId(id) });
    if (!user)
      return {
        success: false,
        type: "notFound",
      };

    delete user?.password;
    const userInfo: UserInfo = JSON.parse(JSON.stringify(user));

    const userLinks = await db
      .collection("links")
      .find({ userId: new ObjectId(id) })
      .toArray();
    if (!userLinks)
      return {
        success: false,
        type: "regular",
      };

    const links: Array<UserLink> = JSON.parse(JSON.stringify(userLinks));

    return {
      success: true,
      userInfo,
      links,
    };
  } catch (error) {
    return {
      success: false,
      type: "regular",
    };
  }
}
