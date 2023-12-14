import { getPosts } from "@/lib/posts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '5';
  const postsData = await getPosts(parseInt(page), parseInt(limit));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Response.json(postsData)
}
