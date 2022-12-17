import styles from "./Blog.module.css";

type Post = {
  id: string;
  title: string;
  image: string;
  content: string;
  author: string;
};

async function getPosts(): Promise<Post[]> {
  const uri =
    process.env.NODE_ENV === "development"
      ? process.env.API_DEV_URI
      : process.env.API_PROD_URI;
  const response = await fetch(`${uri}/api/blogs`);
  const json: any = await response.json();
  const { posts } = json;
  return posts ?? [];
}

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className={styles.PostsContainer}>
      {posts.map((post) => (
        <div className={styles.Post} key={post.id}>
          <img width={200} height={200} src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.author}</p>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
}
