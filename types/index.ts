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

export type photos = {
  title: string;
  mainImage: any;
  _id: string;
};

export type Jobs = {
  profile: string;
  designation: string;
  jobSpecification: string[];
  experience: string;
  location: string;
};

export type team = {
  name: string;
  designation: string;
  about: string;
  mainImage: SanityImageSource;
};
