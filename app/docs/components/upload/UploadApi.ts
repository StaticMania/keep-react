export const uploadApiData = [
  {
    id: 1,
    propsName: "file",
    propsType: "string",
    propsDescription: "The selected file's name or path for display.",
  },
  {
    id: 2,
    propsName: "horizontal",
    propsType: "boolean",
    propsDescription: "Arranges the component horizontally if set to true.",
  },
  {
    id: 3,
    propsName: "disabled",
    propsType: "boolean",
    propsDescription: "Disables interactions with the upload component.",
  },
  {
    id: 4,
    propsName: "showProgressBar",
    propsType: "boolean",
    propsDescription:
      "Indicates whether to display a progress bar during file upload.",
  },
  {
    id: 5,
    propsName: "progressType",
    propsType: '"success" | "error" | "pending"',
    propsDescription:
      "Sets the visual style of the progress bar based on the upload status.",
  },
  {
    id: 6,
    propsName: "progress",
    propsType: "number",
    propsDescription: "The progress percentage of the file upload.",
  },
  {
    id: 7,
    propsName: "uploadTime",
    propsType: "string",
    propsDescription: "Timestamp indicating the time of the upload.",
  },
  {
    id: 8,
    propsName: "onFileChange",
    propsType: "(e:ChangeEvent) => void",
    propsDescription: "Callback function when the selected file changes.",
  },
];
