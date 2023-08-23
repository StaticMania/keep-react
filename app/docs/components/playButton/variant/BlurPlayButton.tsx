"use client";

import PlayButton from "@/src/components/PlayButton";
import { Play } from "phosphor-react";

const BlurPlayButton = () => {
  return (
    <PlayButton
      title="Play Video"
      type="blur"
      circle={true}
      size="2xl"
      icon={<Play size="24" />}
      className="bg-black/40 backdrop-blur-sm"
    />
  );
};

const BlurPlayButtonCode = `
"use client";
import PlayButton from "keep-design";
import { Play } from "phosphor-react";

const BlurPlayButton = () => {
  return (
     <PlayButton
      title="Play Video"
      type="blur"
      circle={true}
      size="2xl"
      icon={<Play size="24" />}
      className="bg-black/40 backdrop-blur-sm"
    />
  );
};

export default BlurPlayButton;
`;

export { BlurPlayButton, BlurPlayButtonCode };
