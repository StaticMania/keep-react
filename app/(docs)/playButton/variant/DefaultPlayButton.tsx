"use client";

import PlayButton from "@/src/components/PlayButton";
import { Play } from "phosphor-react";

const DefaultPlayButton = () => {
  return (
    <PlayButton title="Play Video" type="primary" icon={<Play size="24" />} />
  );
};

const DefaultPlayButtonCode = `
"use client";
import PlayButton from "keep-design";
import { Play } from "phosphor-react";

const DefaultPlayButton = () => {
  return (
    <PlayButton title="Play Video" type="primary" icon={<Play size="24" />} />
  );
};

export default DefaultPlayButton;
`;

export { DefaultPlayButton, DefaultPlayButtonCode };
