import { Box, ChakraBaseProvider, theme } from "@chakra-ui/react";
import "@storybook/addon-console";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ChakraBaseProvider theme={theme}>
      <Box m={4}>
        <Story />
      </Box>
    </ChakraBaseProvider>
  ),
];

export default preview;
