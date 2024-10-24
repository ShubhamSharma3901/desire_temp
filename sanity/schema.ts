import { type SchemaTypeDefinition } from "sanity";
import { blogs } from "./schema/blog";
import { photos } from "./schema/photos";
import { jobs } from "@/sanity/schema/jobs";
import { team } from "@/sanity/schema/team";
import { caseStudies } from "@/sanity/schema/case-studies";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogs, photos, jobs, team, caseStudies],
};
