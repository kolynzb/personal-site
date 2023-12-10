import { defineField, defineType } from "sanity";

export default defineType({
  name: "licenseCertification",
  title: "License Certification",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title or name of the certification",
    }),
    defineField({
      name: "issuingOrganization",
      title: "Issuing Organization",
      type: "reference",
      to: [{ type: "company" }],
      description: "The organization that issued the certification",
    }),
    defineField({
      name: "issueDate",
      title: "Issue Date",
      type: "date",
      description: "The date when the certification was issued",
    }),
    defineField({
      name: "certificateURL",
      title: "Certificate URL",
      type: "url",
      description: "The URL to the certificate or verification page",
    }),
  ],
});
