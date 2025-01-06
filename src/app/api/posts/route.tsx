import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request: NextResponse) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    //fetch data
    await connect();
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};

export const POST = async (request: NextResponse) => {
  const body = await request.json();

  await connect();

  const newPost = new Post(body);
  try {
    //fetch data
    await newPost.save();
    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};
