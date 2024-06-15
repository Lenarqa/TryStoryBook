import React from "react";
import { InputSizeMD } from "../Input/Input.stories";
import { Primary } from "../Button/Button.stories";

export default {
  title: "Form/Subscription",
};

export const PrimarySubscription = () => (
  <>
    <InputSizeMD />
    <Primary />
  </>
);
