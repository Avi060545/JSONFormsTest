import { useJsonForms, withJsonFormsControlProps } from "@jsonforms/react";
import {
  ControlProps,
  rankWith,
  isDescriptionHidden,
  isDateControl,
  UPDATE_CORE,
  UPDATE_DATA,
  updateCore,
} from "@jsonforms/core";
import { useEffect, useState } from "react";

export const BHKRenderer = ({
  data,
  handleChange,
  path,
  schema,
  uischema,
}: ControlProps) => {
  const ctx = useJsonForms();
  const options = uischema?.options?.additionalData || [];

  const [selectedOption, setSelectedOption] = useState("");
  const handleClick = (item: any) => {
    setSelectedOption(item?.value);
    handleChange(path, item);
  };

  useEffect(() => {
    setSelectedOption("");
    if (ctx?.core?.data?.bhk) delete ctx["core"]["data"]["bhk"];
  }, [ctx?.core?.data?.propertyType]);

  return (
    <>
      {ctx?.core?.data?.propertyType?.value === "residential" &&
        (ctx?.core?.data?.subPropertyType?.value === "flat" ||
          ctx?.core?.data?.subPropertyType?.value === "villa" ||
          ctx?.core?.data?.subPropertyType?.value === "individual_house") && (
          <>
            <p className="text-2xl">{schema?.title}</p>
            <div style={{ display: "flex" }}>
              {options?.map((item: any) => (
                <div
                  style={{
                    marginLeft: "4px",

                    color: selectedOption === item?.value ? "white" : "black",
                    backgroundColor:
                      selectedOption === item?.value ? "red" : "white",
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
        )}
    </>
  );
};

export default withJsonFormsControlProps(BHKRenderer);
