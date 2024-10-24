import { groq } from "next-sanity";
import { client } from "./client";

export async function getBlogs() {
  try {
    return await client.fetch(
      groq`*[_type=="post"]{
      title,
        mainImage,
        description,
        publishedAt,
        slug,
        _id
      }`,
      {},
      { next: { tags: ["post"] }, cache: "no-cache" },
    );
  } catch (err) {
    console.log("getBlogs error=== ", err);
  }
}

export async function getBlogBySlug(slug: string) {
  try {
    return await client.fetch(
      groq`*[_type=="post" && slug.current == $slug]{
      title,
        mainImage,
        description,
        publishedAt,
        slug,
        _id,
        body
      }`,
      { slug: slug },
      { next: { tags: ["post"] }, cache: "force-cache" },
    );
  } catch (err) {
    console.log("getBlogs error=== ", err);
  }
}

export async function getCaseStudies() {
  try {
    return await client.fetch(
      groq`*[_type=="case-studies"]{
      title,
        mainImage,
        description,
        publishedAt,
        slug,
        _id
      }`,
      {},
      { next: { tags: ["case-studies"] }, cache: "no-cache" },
    );
  } catch (err) {
    console.log("getCaseStudies error=== ", err);
  }
}

export async function getCaseStudiesBySlug(slug: string) {
  try {
    return await client.fetch(
      groq`*[_type=="case-studies" && slug.current == $slug]{
      title,
        mainImage,
        description,
        publishedAt,
        slug,
        _id,
        body
      }`,
      { slug: slug },
      { next: { tags: ["case-studies"] }, cache: "force-cache" },
    );
  } catch (err) {
    console.log("getCaseStudiesBySlug error=== ", err);
  }
}

export async function getPhotosDesire() {
  try {
    return await client.fetch(
      groq`*[_type=="photos"]{
    	title,
    	mainImage,
    	_id
    }`,
      {},
      { next: { tags: ["photos"] }, cache: "reload" },
    );
  } catch (err) {
    console.log("getPhotosDesire error=== ", err);
  }
}

export async function getJobs() {
  try {
    return await client.fetch(
      groq`
    *[_type == "jobs"]{
      profile,
      designation,
      jobSpecification,
      experience,
      location,
      _id
    }`,
      {},
      { next: { tags: ["jobs"] }, cache: "no-cache" },
    );
  } catch (e) {
    console.log("getJobs error=== ", e);
  }
}

export async function getTeam() {
  try {
    return await client.fetch(
      groq`
    *[_type == "team" ]| order(_createdAt asc){
      name,
      designation,
      about,
      mainImage,
      _id
    }`,
      {},
      { next: { tags: ["team"] }, cache: "no-cache" },
    );
  } catch (e) {
    console.log("getTeam error=== ", e);
  }
}
