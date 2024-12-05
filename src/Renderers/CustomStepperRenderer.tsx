import React, { Children, useState } from "react";
import {
  JsonFormsDispatch,
  useJsonForms,
  withJsonFormsControlProps,
  withJsonFormsLayoutProps,
} from "@jsonforms/react";
import {
  UISchemaElement,
  Categorization,
  StatePropsOfLayout,
  computeLabel,
  isControl,
  rankWith,
} from "@jsonforms/core";

import Ajv from "ajv";
import {
  materialRenderers,
  materialCells,
  MaterialAllOfRenderer,
} from "@jsonforms/material-renderers";

import PropertyTypeRenderer from "./PropertyTypeRenderer";
import IconRadioGroup from "./IconRadioGroup";
import SubPropertyTypeRenderer from "./SubPropertyTypeRenderer";
import BHKRenderer from "./BHKRenderer";
import LocationHubRenderer from "./LocationHubRenderer";

// interface props {
//   uischema?: any;
//   schema?: any;
//   data?: any;
// }
const ajv = new Ajv();

const customRenderers = [
  ...materialRenderers,
  {
    tester: (uischema: any) =>
      uischema.options?.format === "subPropertyType" ? 10 : -1,
    renderer: SubPropertyTypeRenderer,
  },
  {
    tester: (uischema: any) =>
      uischema.options?.format === "bhkType" ? 10 : -1,
    renderer: BHKRenderer,
  },
  {
    tester: (uischema: any) =>
      uischema.options?.format === "locationHubType" ? 10 : -1,
    renderer: LocationHubRenderer,
  },
  {
    tester: (uischema: any) =>
      uischema.options?.format === "propertyType" ? 10 : -1,
    renderer: PropertyTypeRenderer,
  },
];

// const CustomStepper = ({ uischema, schema, data }: props) => {
const CustomStepper = ({ uischema, schema, data }: StatePropsOfLayout) => {
  const uischemaFile = uischema as Categorization;
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = uischemaFile?.elements.length;
  const ctx = useJsonForms();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "block" }}>
          {Array.from({ length: totalSteps }, (_, index) => (
            <button
              style={{
                display: "block",
                marginBottom: "10px",
              }}
              onClick={() => {
                setActiveStep(index);
              }}
              key={index}
            >
              Item {index + 1}
            </button>
          ))}
        </div>
        <div>
          <JsonFormsDispatch
            uischema={uischemaFile?.elements[activeStep]}
            renderers={customRenderers}
            cells={materialCells}
          />
          <button
            onClick={() => {
              console.log(ctx);
            }}
          >
            Submit
          </button>
        </div>
        <div>{/* {Children} */}</div>{" "}
      </div>
    </>
  );
};

// export default withJsonFormsControlProps(CustomStepper);
export default withJsonFormsLayoutProps(CustomStepper);
