"use client";
import { Play } from "phosphor-react";
import { PlayButton } from "~/src";

const SecondaryPlayButton = () => {
  return (
    <div className="h-20 p-5 flex items-center justify-start">
      <PlayButton
        title="Play Video"
        type="outlineGray"
        icon={<Play size="24" />}
      />
    </div>
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
