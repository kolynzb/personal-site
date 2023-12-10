import { defineField, defineType } from "sanity";

export default defineType({
  name: "awards",
  title: "Awards and Achievements",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title or name of the award or achievement",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      description: "The date when the award or achievement was received",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description:
        "A brief description or details about the award or achievement",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",
    }),
  ],
});
