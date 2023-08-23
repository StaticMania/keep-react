"use client";

import PlayButton from "@/src/components/PlayButton";
import { Play } from "phosphor-react";

const NoBorderPlayButton = () => {
  return (
    <PlayButton title="Play Video" type="text" icon={<Play size="24" />} />
  );
};

const NoBorderPlayButtonCode = `
"use client";
import PlayButton from "keep-design";
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
