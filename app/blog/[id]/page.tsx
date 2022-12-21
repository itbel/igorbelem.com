import { BlogSitePost } from "../page";

async function getPost(id: string): Promise<BlogSitePost> {
  const uri =
    process.env.NODE_ENV === "development"
      ? process.env.API_DEV_URI
      : process.env.API_PROD_URI;
  const response = await fetch(`${uri}/api/posts/${id}`, { cache: "no-store" });
  if (!response.ok) {
    console.log(response.statusText);
    throw new Error("Failed to fetch blog: " + id);
  }
  const json: any = await response.json();
  const { post }: { post: BlogSitePost } = json;
  return post;
}

export default async function BlogPost({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getPost(id);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "8vw 10vw",
        maxWidth: 800,
      }}
    >
      <h1
        style={{
          fontFamily: "Verdana",
        }}
      >
        {post?.title}
      </h1>
      <span
        style={{
          marginBottom: 60,
          fontFamily: "sans-serif",
          marginTop: 4,
          fontWeight: 100,
          fontSize: 12,
        }}
      >
        by {post?.author} -{" "}
        {new Date(parseInt(post.publishedDate)).toLocaleDateString()}
      </span>
      <div
        style={{ fontFamily: "Georgia" }}
        dangerouslySetInnerHTML={{ __html: post?.content }}
      ></div>
    </div>
  );
}
