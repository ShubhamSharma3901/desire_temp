import { type SchemaTypeDefinition } from "sanity";
import { blogs } from "./schema/blog";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blogs],
};
