"use client";
import { Play } from "phosphor-react";
import { PlayButton } from "~/src";

const CirclePlayButton = () => {
  return (
    <div className="h-20 p-5 flex items-center justify-start">
      <PlayButton
        type="primary"
        circle={true}
        size="2xl"
        icon={<Play size="25" />}
      />
    </div>
  );
};

const CirclePlayButtonCode = `
"use client";
import { PlayButton } from "keep-react";
import { Play } from "phosphor-react";

export const PlayButtonComponent = () => {
  return (
    <PlayButton
        type="primary"
        circle={true}
        size="2xl"
        icon={<Play size="25" />}
    />
  );
}
`;

export { CirclePlayButton, CirclePlayButtonCode };
