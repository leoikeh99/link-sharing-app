export function validateUserProfileUrl(
  platform: Socials,
  url: string
): boolean {
  const urlRegex: Record<string, RegExp> = {
    github: /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/,
    twitter: /^(https?:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9_]+\/?$/,
    youtube:
      /^(https?:\/\/)?(www\.)?youtube\.com\/(user\/[a-zA-Z0-9_-]+|channel\/[a-zA-Z0-9_-]+)\/?$/,
    gitlab: /^(https?:\/\/)?(www\.)?gitlab\.com\/[a-zA-Z0-9_-]+\/?$/,
    frontendmentor:
      /^(https?:\/\/)?(www\.)?frontendmentor\.io\/profile\/[a-zA-Z0-9_-]+\/?$/,
    linkedin: /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/,
    facebook: /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9_-]+\/?$/,
    hashnode: /^(https?:\/\/)?(www\.)?hashnode\.com\/[a-zA-Z0-9_-]+\/?$/,
    stackoverflow:
      /^(https?:\/\/)?(www\.)?stackoverflow\.com\/users\/[0-9]+\/?[a-zA-Z0-9_-]*$/,
    codewars: /^(https?:\/\/)?(www\.)?codewars\.com\/users\/[a-zA-Z0-9_-]+\/?$/,
    devto: /^(https?:\/\/)?(www\.)?dev\.to\/[a-zA-Z0-9_-]+\/?$/,
    twitch: /^(https?:\/\/)?(www\.)?twitch\.tv\/[a-zA-Z0-9_-]+\/?$/,
    freecodecamp:
      /^(https?:\/\/)?(www\.)?freecodecamp\.org\/[a-zA-Z0-9_-]+\/?$/,
  };

  const platformRegex = urlRegex[platform.toLowerCase()];

  if (!platformRegex) {
    // If the platform is not recognized, return false
    return false;
  }

  return platformRegex.test(url);
}
