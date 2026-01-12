
import BlogListMain from "@/pages/blogs/blog-list/BlogListMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Agntix Digital Agency & Creative Portfolio NextJs Template",
};

export default function Blog() {
  return (
    <BlogListMain/>
  );
}
