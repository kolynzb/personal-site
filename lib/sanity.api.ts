import {
  getAllEducationQuery,
  getAllExperienceQuery,
  getAllLicenseCertificationQuery,
  getAllProjectsQuery,
  getAwardsQuery,
  getFeaturedProjectsQuery,
  getProjectBySlugQuery,
  getProjectCategoriesQuery,
  getProjectsInCategoryQuery,
  getProjectsUnderTagQuery,
  getTestimonialsQuery,
  searchProjectsQuery,
} from "./sanity.queries";

import {
  IAward,
  IEducation,
  IExperience,
  ILicenseCertification,
  IProject,
  IProjectCategory,
  ITestimonial,
} from "./sanity.interface";
import { client } from "@sanity/lib/client";

/*
 * ------Projects------
 */

export const getProjects = async (): Promise<IProject[]> => {
  const response = await client.fetch(getAllProjectsQuery);

  return response;
};

export const getProject = async (slug: string): Promise<IProject> => {
  const response = await client.fetch(getProjectBySlugQuery, {
    slug,
  });

  return response;
};

export const getFeaturedProjects = async (): Promise<IProject[]> => {
  const response = await client.fetch(getFeaturedProjectsQuery);

  return response;
};

export const getProjectsUnderTag = async (tag: string) => {
  const response = await client.fetch(getProjectsUnderTagQuery, { tag });

  return response;
};

export const searchProjectPosts = (searchTerm: string) => {
  const response = client.fetch(searchProjectsQuery, {
    searchTerm,
  });

  return response;
};

/*
 * ------Project CATEGORIES------
 */

export const getProjectCategories = async (): Promise<IProjectCategory[]> => {
  const response = await client.fetch(getProjectCategoriesQuery);

  return response;
};

export const getProjectsInCategory = async (
  categorySlug: string
): Promise<IProject[]> => {
  const response = await client.fetch(getProjectsInCategoryQuery, {
    slug: categorySlug,
  });

  return response;
};

/*
 * ------AWARDS------
 */

export const getAwards = async (): Promise<IAward[]> => {
  const response = await client.fetch(getAwardsQuery);

  return response;
};

/*
 * ------EDUCATION------
 */

export const getAllEducation = async (): Promise<IEducation[]> => {
  const response = await client.fetch(getAllEducationQuery);

  return response;
};

/*
 * ------EXPERIENCE------
 */
export const getAllExperience = async (): Promise<IExperience[]> => {
  const response = await client.fetch(getAllExperienceQuery);

  return response;
};

/*
 * ------LICENSES & CERTIFICATIONS------
 */

export const getAllLicenseCertification = async (): Promise<
  ILicenseCertification[]
> => {
  const response = await client.fetch(getAllLicenseCertificationQuery);

  return response;
};

/*
 * ------TESTIMONIALS------
 */

export const getAllTestimonials = async (): Promise<ITestimonial[]> => {
  const response = await client.fetch(getTestimonialsQuery);

  return response;
};
