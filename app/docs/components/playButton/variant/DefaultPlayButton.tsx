"use client";
import { Play } from "phosphor-react";
import { PlayButton } from "~/src";

const DefaultPlayButton = () => {
  return (
    <PlayButton title="Play Video" type="primary" icon={<Play size="24" />} />
  );
};

const DefaultPlayButtonCode = `
"use client";
import { PlayButton } from "keep-react";
import { Play } from "phosphor-react";

const DefaultPlayButton = () => {
  return (
    <PlayButton title="Play Video" type="primary" icon={<Play size="24" />} />
  );
};

export default DefaultPlayButton;
`;

export { DefaultPlayButton, DefaultPlayButtonCode };
