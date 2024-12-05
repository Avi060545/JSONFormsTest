// customRenderers.ts

import { materialRenderers } from "@jsonforms/material-renderers";
import IconRadioGroup from "./IconRadioGroup"; // Update with the actual path to your renderer
import CustomStepperRenderer from "./CustomStepperRenderer"; // Update with the actual path to your renderer
import PropertyTypeRenderer from "./PropertyTypeRenderer"; // Update with the actual path to your renderer

/**
 * Custom renderers for JSON Forms
 */
export const customRenderers = [
  ...materialRenderers,
  {
    tester: (uischema: any) =>
      uischema.options?.format === "subPropertyType" ? 10 : -1,
    renderer: IconRadioGroup,
  },
  {
    tester: (uischema: any) =>
      uischema.options?.variant === "customStepper" ? 10 : -1,
    renderer: CustomStepperRenderer,
  },
  {
    tester: (uischema: any) =>
      uischema.options?.format === "propertyType" ? 10 : -1,
    renderer: PropertyTypeRenderer,
  },
];
