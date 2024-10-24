import { defineField, defineType } from "sanity";

export const jobs = defineType({
  name: "jobs",
  title: "Jobs",
  type: "document",
  fields: [
    defineField({
      name: "profile",
      title: "Profile",
      type: "string",
    }),
    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
    }),
    defineField({
      name: "jobSpecification",
      title: "Job Specification",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "experience",
      title: "Experience (yrs)",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
  ],
});
