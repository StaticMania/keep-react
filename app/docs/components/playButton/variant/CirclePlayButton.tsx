"use client";
import { Play } from "phosphor-react";
import { PlayButton } from "~/src";

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
import {PlayButton} from "keep-react";
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
