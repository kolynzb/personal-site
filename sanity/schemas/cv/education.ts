import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "The degree or qualification obtained",
    }),
    defineField({
      name: "institution",
      title: "Institution",
      type: "reference",
      to: [{ type: "company" }],
      description: "The name of the educational institution",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      description: "The start date of the education program",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      description:
        "The end date of the education program. Leave empty if ongoing",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "string" }],
      description:
        "A brief description of the education program or specialization",
    }),
  ],
});
