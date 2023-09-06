"use client";
import { Play } from "phosphor-react";
import { PlayButton } from "@/src/components";

const SizesPlayButton = () => {
  return (
    <div className="flex items-center gap-2">
      <PlayButton
        type="primary"
        circle={true}
        size="xs"
        icon={<Play size="20" />}
      />
      <PlayButton
        type="primary"
        circle={true}
        size="sm"
        icon={<Play size="21" />}
      />
      <PlayButton
        type="primary"
        circle={true}
        size="md"
        icon={<Play size="22" />}
      />
      <PlayButton
        type="primary"
        circle={true}
        size="lg"
        icon={<Play size="23" />}
      />
      <PlayButton
        type="primary"
        circle={true}
        size="xl"
        icon={<Play size="24" />}
      />
      <PlayButton
        type="primary"
        circle={true}
        size="2xl"
        icon={<Play size="25" />}
      />
    </div>
  );
};

const SizesPlayButtonCode = `
"use client";
import { PlayButton } from "keep-react";
import { Play } from "phosphor-react";

const SizesPlayButton = () => {
  return (
    <div className="flex items-center gap-2">
      <PlayButton
        type="primary"
        circle={true}
        size="xs"
        icon={<Play size="20" />}
      />
      <PlayButton
        type="primary"
        circle={true}
        size="sm"
        icon={<Play size="21" />}
      />
      <PlayButton
        type="primary"
        circle={true}
        size="md"
        icon={<Play size="22" />}
      />
      <PlayButton
        type="primary"
        circle={true}
        size="lg"
        icon={<Play size="23" />}
      />
      <PlayButton
        type="primary"
        circle={true}
        size="xl"
        icon={<Play size="24" />}
      />
      <PlayButton
        type="primary"
        circle={true}
        size="2xl"
        icon={<Play size="25" />}
      />
    </div>
  );
};

export default SizesPlayButton;
`;

export { SizesPlayButton, SizesPlayButtonCode };
