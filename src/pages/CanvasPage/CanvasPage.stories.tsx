import {Meta} from "@storybook/react";

import CanvasPage from "@pages/CanvasPage/CanvasPage";

export default {
  title: 'Example/CanvasPage',
  component: CanvasPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const ObjectRain = () => <CanvasPage />;
ObjectRain.storyName = "ObjectRain";
