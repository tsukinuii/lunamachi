import "../src/app/globals.css";
import "../src/styles/tokens.css";
import ReduxProvider from "../src/store/providers";
import React from "react";

const preview = {
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: "^on[A-Z].*" },
    a11y: { disableOtherRules: false }
  },
  decorators: [
    (Story: any) => React.createElement(
      ReduxProvider,
      null,
      React.createElement(Story, null)
    ),
  ]
};

export default preview;
