import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({
            email: credentials?.email,
          }).exec(); // Ensure it's a plain object

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials?.password,
              user.password
            );

            if (isPasswordCorrect) {
              return { id: user._id, name: user.name, email: user.email }; // Return necessary fields
            } else {
              throw new Error("Wrong credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (error) {
          console.error(error);
          throw new Error(
            error instanceof Error ? error.message : "Unknown error"
          );
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
