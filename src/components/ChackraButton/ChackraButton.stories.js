import React from "react";
import { Button } from "@chakra-ui/react";
import { fn } from "@storybook/test";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "Chackra/ChackraButton",
  component: Button,
  tags: ["autodocs"],
};

const Template = (args) => <Button {...args} />;

export const SuccessButton = Template.bind({});
SuccessButton.args = {
  ...actions("onClick", "onMouseOver"),
  colorScheme: "blue",
  children: "Success",
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  colorScheme: "red",
  children: "Danger",
  onClick: action("I Click!"),
  isDisabled: false,
};

export const Log = () => (
  <Button colorScheme="blue" onClick={() => console.log("Log!")}>
    Log
  </Button>
);
