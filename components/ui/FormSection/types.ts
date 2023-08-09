import { Dispatch, SetStateAction } from "react";

const inputTypes = ["email", "text", "tel", "textarea"] as const;

export type Props = {
  fieldName: string[];
  fieldType: (typeof inputTypes)[number][];
  submitButtonText: string;
  fieldValue: string[];
  fieldSetter: Dispatch<SetStateAction<string>>[];
  submitAction: (clientName: string, text: string) => void;
};
