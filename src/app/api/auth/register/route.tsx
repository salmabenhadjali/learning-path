import { NextResponse } from "next/server";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export const POST = async (request: NextResponse) => {
  const { name, email, password } = await request.json();
  await connect();
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({ name, email, password: hashedPassword });
  try {
    //save data
    await newUser.save();
    return new NextResponse("User has been created.", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
