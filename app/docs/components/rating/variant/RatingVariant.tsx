"use client";
import { Rating } from "~/src";

const VariantOfRating = () => {
  return (
    <Rating size={30}>
      <Rating.Star filledType="fill" />
      <Rating.Star filledType="regular" />
      <Rating.Star filledType="duotone" />
      <Rating.Star filledType="bold" />
      <Rating.Star filledType="light" />
      <Rating.Star filledType="thin" />
    </Rating>
  );
};

const VariantOfRatingCode = `
"use client";
import { Rating } from "keep-react";

const VariantOfRating = () => {
  return (
    <Rating size={30}>
    <Rating.Star filledType="fill" />
    <Rating.Star filledType="regular" />
    <Rating.Star filledType="duotone" />
    <Rating.Star filledType="bold" />
    <Rating.Star filledType="light" />
    <Rating.Star filledType="thin" />
  </Rating>
  );
};

export default VariantOfRating;
`;

export { VariantOfRating, VariantOfRatingCode };
