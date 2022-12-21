import Link from "next/link";
import Image from "next/image";
import { BlogSitePost } from "../blog/page";
import styles from "./BlogPost.module.css";
export default function BlogPost({ post }: { post: BlogSitePost }) {
  return (
    <div className={styles.BlogPost} key={post._id}>
      {post.image ? (
        <Image width={250} height={150} src={post.image} alt={post.title} />
      ) : null}
      <div className={styles.BlogPostContent}>
        <h2>{post.title}</h2>
        <p className={styles.Author}>by {post.author}</p>
        <p className={styles.Summary}>{post.summary}</p>
        <Link
          className={styles.Button}
          href={"/blog/" + post._id}
          key={post._id}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
