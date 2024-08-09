import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type testimonial = {
  image: SanityImageSource;
  rating: number;
  name: string;
  designation: string;
  remarks: string;
};

export type blogs = {
  title: string;
  mainImage: SanityImageSource;
  description: string;
  publishedAt: string;
  slug: { current: string };
  _id: string;
};
