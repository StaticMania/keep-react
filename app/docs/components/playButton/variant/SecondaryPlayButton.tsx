"use client";
import { Play } from "phosphor-react";
import { PlayButton } from "~/src";

const SecondaryPlayButton = () => {
  return (
    <PlayButton
      title="Play Video"
      type="outlineGray"
      icon={<Play size="24" />}
    />
  );
};

const SecondaryPlayButtonCode = `
"use client";
import { Play } from "phosphor-react";
import { PlayButton } from "keep-react";

export const PlayButtonComponent = () => {
  return (
    <PlayButton
    title="Play Video"
    type="outlineGray"
    icon={<Play size="24" />}
  />
  );
}
`;

export { SecondaryPlayButton, SecondaryPlayButtonCode };
