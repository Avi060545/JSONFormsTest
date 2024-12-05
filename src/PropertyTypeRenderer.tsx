import { useJsonForms, withJsonFormsControlProps } from "@jsonforms/react";
import {
  ControlProps,
  rankWith,
  isDescriptionHidden,
  isDateControl,
} from "@jsonforms/core";
import { useState, useEffect } from "react";

export const PropertyTypeRenderer = ({
  data,
  handleChange,
  path,
  schema,
  uischema,
}: ControlProps) => {
  const options = uischema?.options?.additionalData || [];
  const ctx = useJsonForms();

  const [selectedOption, setSelectedOption] = useState("");
  const handleClick = (item: any) => {
    setSelectedOption(item?.value);
    handleChange(path, item);
  };

  useEffect(() => {
    if (ctx?.core?.data?.subPropertyType)
      delete ctx["core"]["data"]["subPropertyType"];
  }, [ctx?.core?.data?.propertyType]);

  return (
    <>
      <p className="text-2xl">{schema?.title}</p>
      <div style={{ display: "flex" }}>
        {options.map((item: any) => (
          <div
            className=""
            style={{
              marginLeft: "4px",

              color: selectedOption === item?.value ? "white" : "black",
              backgroundColor: selectedOption === item?.value ? "red" : "white",
              width: "fit",
            }}
            key={item?.value}
            onClick={() => handleClick(item)}
          >
            {item?.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default withJsonFormsControlProps(PropertyTypeRenderer);
