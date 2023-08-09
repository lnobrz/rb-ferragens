import { Dispatch, SetStateAction } from "react";

export type Props = {
  inputName: string;
  inputType: "email" | "text" | "tel" | "textarea";
  textSetter: Dispatch<SetStateAction<string>>;
};
