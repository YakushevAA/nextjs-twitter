import sql from 'better-sqlite3';

const db = sql('posts.db');

export interface Post {
  id: number;
  text: string;
  creator: string;
  date: string;
}

export interface PostsData {
  posts: Post[];
  next: boolean;
}

interface TotalCount {
  total: number;
}

export function getPosts(page: number, limit: number = 5): PostsData {
  const offset = (page - 1) * limit;
  const getPostsStmt = db.prepare('SELECT * FROM posts LIMIT ? OFFSET ?');
  const posts = getPostsStmt.all(limit, offset) as Post[];

  const totalItems = db.prepare('SELECT COUNT(*) AS total FROM posts').get() as TotalCount;
  const total = totalItems.total;
  const next = (offset + posts.length) < total;

  return {
    posts,
    next,
  };
}