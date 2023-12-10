import { groq } from "next-sanity";

/*
 * ------PROJECTS------
 */
const projectFields = groq`
 ...,
 "slug": slug.current,
  categories[] ->,
  "images": images[]->url,
  "mainImage": mainImage.asset->url,
`;

export const getAllProjectsQuery = groq`
*[_type == "project"]{
  ${projectFields}
}| order(_createdAt desc)`;

export const getFeaturedProjectsQuery = groq`
*[_type == "project" && isFeatured == true]{
  ${projectFields}
}| order(_createdAt desc)`;

export const getProjectBySlugQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}
`;

export const getProjectsUnderTagQuery = groq`
*[_type == "project" && $tag in tags]{
  ${projectFields}
}
`;

export const searchProjectsQuery = groq`
*[_type=='project' && title match $searchTerm || description match  $searchTerm || categories match  $searchTerm  ]{
  ${projectFields}
}
`;

/*
 * ------PROJECT CATEGORIES------
 */
const projectCategoryFields = groq`
    ...,
    "image": image.asset->url,
    "slug": slug.current
`;
export const getProjectCategoriesQuery = groq`
*[_type == "projectCategory"]{
   ${projectCategoryFields}
 }`;

export const getProjectsInCategoryQuery = groq`
*[_type == "project" && categories[].slug.current == $slug]{
  ${projectFields}
}| order(_createdAt desc)`;

/*
 * ------AWARDS------
 */
export const getAwardsQuery = groq`
*[_type == "awards"]{
  ...,
  "images": images[]->url
}`;

/*
 * ------COMPANY------
 */

const companyFields = groq`
  ...,
  "slug": slug.current,
  "logo": logo.asset->url
`;

export const getCompaniesQuery = groq`
*[_type == "company"]{
${companyFields}
}`;

/*
 * ------EDUCATION------
 */
export const getAllEducationQuery = groq`
*[_type == "education"]{
 ...,
 institution ->{
    ${companyFields}
  }
}`;

/*
 * ------EXPERIENCE------
 */
export const getAllExperienceQuery = groq`
*[_type == "experience"]{
...,
"slug": slug.current,
company ->{
    ${companyFields}
  }
}`;

/*
 * ------LICENSES & CERTIFICATIONS------
 */
export const getAllLicenseCertificationQuery = groq`
*[_type == "licenseCertification"]{
  ...,
  issuingOrganization-> {
      ${companyFields}
  }
}`;

/*
 * ------TESTIMONIALS------
 */
export const getTestimonialsQuery = groq`
*[_type == "testimonial"]{
...,
  "image": image.asset->url,
  company -> {
     ${companyFields},
  },
}`;
