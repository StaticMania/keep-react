export const useProgress = ({
  width,
  progress,
}: {
  width: number;
  progress: number;
}) => {
  const progressBar =
    20 + width / 100 + (width / 100) * (progress === 1 ? 0 : progress);
  const progressBar2 = progressBar - 20;

  let divOneWidth: number | string = 0;
  let divTwoWidth: number | string = 0;

  if (progress === 0) {
    divOneWidth = 0;
  } else if (progress === 100) {
    divOneWidth = "100%";
  } else {
    divOneWidth = progressBar;
  }

  if (progress === 0) {
    divTwoWidth = 0;
  } else if (progress >= 100) {
    divTwoWidth = "100%";
  } else {
    divTwoWidth = progressBar2;
  }
  return {
    divOneWidth,
    divTwoWidth,
  };
};
