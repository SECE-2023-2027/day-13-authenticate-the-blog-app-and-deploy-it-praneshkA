import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import Link from "next/link";
import styles from "./page.module.css";

export default async function HomePage() {
  await connectDB();
  const blogs = await Blog.find().lean();

  return (
    <div className={styles.container}>
      <h1>All Blogs</h1>
      {blogs.map(blog => (
        <div key={blog._id} className={styles.blogCard}>
          <Link href={`/${blog._id}`}>
            <h2>{blog.title}</h2>
          </Link>
          <p>{blog.content.slice(0, 80)}...</p>
        </div>
      ))}
    </div>
  );
}
