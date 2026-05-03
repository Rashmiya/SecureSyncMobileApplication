import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types
export type TagType = "confidential" | "internal" | "client" | "general";

export interface File {
  id: string;
  name: string;
  size: number;
  mimeType: string;
  tag: TagType;
  uploadedBy: string;
  uploadedAt: number;
  workspaceId: string;
}

export interface UploadProgress {
  fileId: string;
  fileName: string;
  progress: number; // 0-100
  status: "uploading" | "completed" | "failed";
}

export interface VaultState {
  files: File[];
  selectedFileId: string | null;
  filterTag: TagType | null;
  uploadProgress: UploadProgress[];
  isLoading: boolean;
}

const initialState: VaultState = {
  files: [],
  selectedFileId: null,
  filterTag: null,
  uploadProgress: [],
  isLoading: false,
};

const vaultSlice = createSlice({
  name: "vault",
  initialState,
  reducers: {},
});

// Export the reducer (used in rootReducer)
export default vaultSlice.reducer;

// Export actions
export const vaultActions = vaultSlice.actions;
