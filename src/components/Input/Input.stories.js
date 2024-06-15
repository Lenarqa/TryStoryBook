import React from "react";
import { Input } from "./Input";

export default {
  title: "Form/MyInput",
  component: Input,
};

export const InputSizeS = () => <Input size="s" placeholder="Small size" />;
export const InputSizeMD = () => <Input size="md" placeholder="Medium size" />;
export const InputSizeX = () => <Input size="x" placeholder="Big size" />;

InputSizeS.storyName = "Small Input";
InputSizeMD.storyName = "Medium Input";
InputSizeX.storyName = "Big Input";
