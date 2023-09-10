"use client";
import { Rating } from "~/src";

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
import { Rating } from "keep-react";

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
