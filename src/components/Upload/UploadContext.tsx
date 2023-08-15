import { createContext, useContext } from "react";

export type UploadContext = {
  progress: number;
  uploadTime?: string;
  file?: string;
  disabled?: boolean;
  showProgressBar?: boolean;
  progressType?: "success" | "error" | "pending";
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UploadContext = createContext<UploadContext | undefined>(
  undefined
);

export function useUploadContext(): UploadContext {
  const context = useContext(UploadContext);

  if (!context) {
    throw new Error(
      "useUploadContext should be used within the UploadContext provider!"
    );
  }

  return context;
}
