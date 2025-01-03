import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import { Params } from "next/dist/server/request/params";

export const GET = async (
  request: NextResponse,
  { params }: { params: Params }
) => {
  const { id } = await params;
  try {
    //fetch data
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database connection error", { status: 500 });
  }
};
