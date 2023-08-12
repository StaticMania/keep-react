"use client";
import PlayButton from "@/src/components/PlayButton";
import { Play } from "phosphor-react";

const CirclePlayButton = () => {
  return (
    <PlayButton
      type="primary"
      circle={true}
      size="2xl"
      icon={<Play size="25" />}
    />
  );
};

const CirclePlayButtonCode = `
"use client";
import PlayButton from "keep-design";
import { Play } from "phosphor-react";

const CirclePlayButton = () => {
  return (
    <PlayButton
        type="primary"
        circle={true}
        size="2xl"
        icon={<Play size="25" />}
    />
  );
};

export default CirclePlayButton;
`;

export { CirclePlayButton, CirclePlayButtonCode };
