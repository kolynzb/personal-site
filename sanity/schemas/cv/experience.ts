import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "reference",
      to: [{ type: "company" }],
      description: "The name of the organization or company",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      description: "The start date of the experience",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      description: "The end date of the experience. Leave empty if ongoing",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["Volunteer", "Work"],
      },
      description: "Indicates the type of experience (e.g., Volunteer or Work)",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description:
        "The location of the organization or company format:<Kampala, Uganda>",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "string",
      description:
      "Describe it ",
    }),
    defineField({
      name: "workMode",
      title: "Work Mode",
      type: "string",
      options: {
        list: ["Remote", "Onsite", "Hybrid"],
      },
      description:
        "Indicates whether the experience was remote, onsite, or hybrid",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "string" }],
      description: "List of responsibilities , roles and achievements",
    }),
  ],
});
