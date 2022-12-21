import styles from "./Blog.module.css";
import Image from "next/image";
import Link from "next/link";
import BlogPost from "../components/BlogPost";
import Spinner from "../components/Spinner";
export type BlogSitePost = {
  _id: string;
  title: string;
  image: string;
  content: string;
  author: string;
  publishedDate: string;
  summary: string;
};

async function getPosts(): Promise<BlogSitePost[]> {
  const uri =
    process.env.NODE_ENV === "development"
      ? process.env.API_DEV_URI
      : process.env.API_PROD_URI;
  console.log({ uri });
  const response = await fetch(`${uri}/api/posts`);
  if (!response.ok) {
    console.log(response.statusText);
    throw new Error("Failed to fetch blogs");
  }
  const json: any = await response.json();
  const { posts } = json;
  return posts ?? [];
}

export default async function Blogs() {
  const posts = await getPosts();
  return (
    <div className={styles.BlogContainer}>
      <h1>Latest blog posts</h1>
      <div className={styles.BlogPostsContainer}>
        {posts.map((post) => {
          return <BlogPost key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}
