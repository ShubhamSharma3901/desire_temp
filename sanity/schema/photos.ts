import { defineField, defineType } from "sanity";

export const photos = defineType({
  name: "photos",
  title: "Life At Desire",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    {
      name: "mainImage",
      title: "Main image",
      type: "image",
    },
  ],
});
