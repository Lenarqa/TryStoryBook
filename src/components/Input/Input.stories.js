import React from "react";
import { Input } from "./Input";

export default {
  title: "MyInput",
  component: Input,
};

export const InputSizeS = () => <Input size="s" placeholder="Small size" />;
export const InputSizeMD = () => <Input size="md" placeholder="Medium size" />;
export const InputSizeX = () => <Input size="x" placeholder="Big size" />;
