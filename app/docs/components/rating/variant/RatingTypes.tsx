"use client";
import { Rating } from "@/src/components/Rating";

const RatingTypes = () => {
  return (
    <Rating size={30}>
      <Rating.Star starType="full" filledType="fill" />
      <Rating.Star starType="half" filledType="fill" />
    </Rating>
  );
};

const RatingTypesCode = `
"use client";
import { Rating } from "keep-design";

const RatingTypes = () => {
  return (
    <Rating size={30}>
      <Rating.Star starType="full" filledType="fill" />
      <Rating.Star starType="half" filledType="fill" />
    </Rating>
  );
};

export default RatingTypes;
`;

export { RatingTypes, RatingTypesCode };
