import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the person providing the testimonial",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description:
        "The role or position of the person providing the testimonial",
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "text",
      description: "The testimonial content",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "reference",
      to: [{ type: "company" }],
      description: "The name of the organization or company",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
