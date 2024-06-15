import React from "react";
import { Button } from "./Button";
import { Center } from "../Center/Center";

export default {
  title: "Form/MyButtons",
  component: Button,
  args: {
    variant: "primary",
    children: "Click to me!",
  },
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    ),
  ],
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Hello World",
};

export const PrimaryB = Template.bind({});
PrimaryB.args = {
  ...PrimaryA.args,
  children: "Click Me",
};

export const PrimaryC = Template.bind({});
