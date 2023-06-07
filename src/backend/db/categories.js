import { v4 as uuid } from "uuid";
import men from "../../image/men.webp"
import female from "../../image/female.webp"

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    image:men,
    Gender: "Man",
    description:
      "literature in the form of prose, e",
  },
  {
    _id: uuid(),
    image:female,
    Gender: "Woman",
    description:
      "Non-fiction is writing that gives i\.",
  },
];
