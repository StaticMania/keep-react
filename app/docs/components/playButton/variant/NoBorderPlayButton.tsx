"use client";
import { Play } from "phosphor-react";
import { PlayButton } from "~/src";

const NoBorderPlayButton = () => {
  return (
    <PlayButton title="Play Video" type="text" icon={<Play size="24" />} />
  );
};

const NoBorderPlayButtonCode = `
"use client";
import {PlayButton} from "keep-react";
import { Play } from "phosphor-react";

const NoBorderPlayButton = () => {
  return (
    <PlayButton
    title="Play Video"
    type="text"
    icon={<Play size="24" />}
  />
  );
};

export default NoBorderPlayButton;
`;

export { NoBorderPlayButton, NoBorderPlayButtonCode };
