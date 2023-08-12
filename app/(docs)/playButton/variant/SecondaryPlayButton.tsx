"use client";

import PlayButton from "@/src/components/PlayButton";
import { Play } from "phosphor-react";

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
import PlayButton from "keep-design";
import { Play } from "phosphor-react";

const SecondaryPlayButton = () => {
  return (
    <PlayButton
    title="Play Video"
    type="outlineGray"
    icon={<Play size="24" />}
  />
  );
};

export default SecondaryPlayButton;
`;

export { SecondaryPlayButton, SecondaryPlayButtonCode };
