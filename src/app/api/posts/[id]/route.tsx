import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (
  request: NextResponse,
  { params }: { params: Params }
) => {
  const { id } = params;
  try {
    //fetch data
    await connect();
    const post = await Post.findById(id);
    console.log(post);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database connection error", { status: 500 });
  }
};
