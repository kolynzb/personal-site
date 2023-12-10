import { type SchemaTypeDefinition } from "sanity";

import project from "./schemas/portfolio/project";
import projectCategory from "./schemas/portfolio/projectCategory";
import awardsAchievements from "./schemas/cv/awardsAchievements";
import company from "./schemas/cv/company";
import education from "./schemas/cv/education";
import experience from "./schemas/cv/experience";
import licenseCertification from "./schemas/cv/licenseCertification";
import testimonial from "./schemas/cv/testimonial";
import blockContent from "./schemas/blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    /*  Portfolio  */
    project,
    projectCategory,
    /*  CV  */
    awardsAchievements,
    company,
    education,
    experience,
    licenseCertification,
    testimonial,
    /*  Other  */
    blockContent
  ],
};
