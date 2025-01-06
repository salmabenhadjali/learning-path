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

export const DELETE = async (
  request: NextResponse,
  { params }: { params: Params }
) => {
  const { id } = await params;

  try {
    await connect();
    //fetch data
    await Post.findByIdAndDelete(id);
    return new NextResponse("Post has been deleted", { status: 201 });
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};
