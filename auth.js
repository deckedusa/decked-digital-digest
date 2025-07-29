// NextAuth configuration for app directory usage
import { getServerSession } from "next-auth";

export const config = {
  debug: true,
  providers: [
    {
      id: "jumpcloud",
      name: "JumpCloud",
      type: "oauth",
      wellKnown: "https://oauth.id.jumpcloud.com/.well-known/openid-configuration",
      authorization: "https://oauth.id.jumpcloud.com/oauth2/auth",
      token: "https://oauth.id.jumpcloud.com/oauth2/token",
      userinfo: "https://oauth.id.jumpcloud.com/userinfo",
      issuer: "https://oauth.id.jumpcloud.com/",
      checks: ["pkce", "state"],
      async profile(profile) {
        console.log(profile);
        // Customize the returned user profile
        return {
          id: profile.sid,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
      clientId: process.env.JUMPCLOUD_ID,
      clientSecret: process.env.JUMPCLOUD_SECRET,
    },
  ],
  // Add more NextAuth config options as needed
};

// Helper for server-side session retrieval in app directory
export function auth(...args) {
  return getServerSession(...args, config);
} 