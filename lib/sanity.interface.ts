import { PortableTextBlock } from "sanity";

export interface SanityBaseSchema {
  _id: string;
  _rev: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface Image {
  _type: "image";
  asset: Reference;
}

export interface Reference {
  _ref: string;
  _type: "reference";
}

export interface Slug {
  _type: "slug";
  current: string;
}

/*
 *  PORTFOLIO
 */
export interface IProject extends SanityBaseSchema {
  title: string;
  slug: string;
  body: PortableTextBlock[];
  mainImage: string;
  summary: string;
  images: string[];
  categories: IProjectCategory[];
  tags: string[];
  isFeatured: boolean;
  url: string;
  startDate: string;
  endDate?: string;
}

export interface IProjectCategory extends SanityBaseSchema {
  title: string;
  slug: string;
  image: string;
  description: string;
}

/*
 *  CV
 */

export interface IAward extends SanityBaseSchema {
  title: string;
  date: string;
  description: string;
  url: string;
  images: string[];
}

export interface ICompany extends SanityBaseSchema {
  name: string;
  slug: string;
  logo: string;
  description: string;
}

export interface IEducation {
  name: string;
  institution: ICompany;
  startDate: string;
  endDate?: string;
  description: string[];
}

export interface IExperience extends SanityBaseSchema {
  title: string;
  slug: string;
  company: ICompany;
  summary: string;
  startDate: string;
  endDate?: string;
  type: "Volunteer" | "Work";
  location: string;
  workMode: "Remote" | "Onsite" | "Hybrid";
  description: string[];
}

export interface ILicenseCertification {
  title: string;
  issuingOrganization: ICompany;
  issueDate: string;
  certificateURL: string;
}

export interface ITestimonial {
  name: string;
  role: string;
  testimonial: string;
  company: ICompany;
  image: string;
}
