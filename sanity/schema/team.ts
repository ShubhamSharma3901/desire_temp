import { defineField, defineType } from "sanity";

export const team = defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
    }),
    defineField({
      name: "about",
      title: "About",
      type: "string",
    }),
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
    },
  ],
});
