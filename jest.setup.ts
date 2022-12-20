import { setGlobalConfig } from "@storybook/testing-react";
import * as globalStorybookConfig from "./.storybook/preview";

import "@testing-library/jest-dom";
import "whatwg-fetch";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
setGlobalConfig(globalStorybookConfig as any);
