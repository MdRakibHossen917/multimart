import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import googleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;
const googleClientId = process.env.GOOGLE_CLIENT_ID || process.env.GOOGLE_ID;
const googleClientSecret =
  process.env.GOOGLE_CLIENT_SECRET || process.env.GOOGLE_SECRET;

const providers: NextAuthOptions["providers"] = [];

if (githubId && githubSecret) {
  providers.push(
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  );
}

if (googleClientId && googleClientSecret) {
  providers.push(
    googleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  );
}

export const authOptions: NextAuthOptions = {
  providers,
  secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET,

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

