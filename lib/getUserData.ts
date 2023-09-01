import { ObjectId } from "mongodb";
import clientPromise from "./mongodb";

export default async function getUserData(id: string) {
  const client = await clientPromise;
  const db = client.db("link-share");

  try {
    let user = await db.collection("users").findOne({ _id: new ObjectId(id) });
    if (!user) return null;

    delete user?.password;
    const userInfo: UserInfo = JSON.parse(JSON.stringify(user));

    const userLinks = await db
      .collection("links")
      .find({ userId: new ObjectId(id) })
      .toArray();
    if (!userLinks) return null;

    const links: Array<UserLink> = JSON.parse(JSON.stringify(userLinks));

    return {
      userInfo,
      links,
    };
  } catch (error) {
    return null;
  }
}
