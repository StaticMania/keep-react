"use client";

import { Rating } from "@/src/components/Rating";
const DefaultRating = () => {
  return (
    <Rating size={30}>
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
    </Rating>
  );
};

const DefaultRatingCode = `
"use client";
import { Rating } from "keep-design";
const DefaultRating = () => {
  return (
    <Rating size={30}>
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="fill" />
    </Rating>
  );
};

export default DefaultRating;
`;

export { DefaultRating, DefaultRatingCode };
