import { getBlogs } from "@/sanity/lib/sanity.query";
import { blogs } from "@/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();
  const blogsToMap: MetadataRoute.Sitemap = blogs.map((blog: blogs) => {
    return {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/viewBlog/${blog.slug.current}`,
      changeFrequency: "monthly",
    };
  });
  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blogs`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/awards`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/innovationhub`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/life-at-desire`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/csr`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/products-and-solution/aqualogix-automation-solution`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/products-and-solution/aqualogix-smart-water-meter`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/products-and-solution/sunaquator-solar-pump-controller`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/services/decentralized-water-management`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/services/esco`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/services/operation-and-maintenance`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/services/smart-epc`,
    },
    ...blogsToMap,
  ];
}
