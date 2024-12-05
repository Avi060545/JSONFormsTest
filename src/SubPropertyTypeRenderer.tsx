import { useJsonForms, withJsonFormsControlProps } from "@jsonforms/react";
import {
  ControlProps,
  rankWith,
  isDescriptionHidden,
  isDateControl,
} from "@jsonforms/core";
import { useEffect, useState } from "react";
import { log } from "console";

export const SubPropertyTypeRenderer = ({
  data,
  handleChange,
  path,
  schema,
  uischema,
}: ControlProps) => {
  const ctx = useJsonForms();
  const options = uischema?.options?.additionalData || {};

  const [selectedOption, setSelectedOption] = useState("");
  const [subPropertyTypeList, setSubPropertyTypeList] = useState([]);
  const handleClick = (item: any) => {
    setSelectedOption(item?.value);
    handleChange(path, item);
  };

  useEffect(() => {
    setSelectedOption("");
    setSubPropertyTypeList(options[ctx?.core?.data?.propertyType?.value]);
    if (ctx?.core?.data?.bhk) delete ctx["core"]["data"]["bhk"];
  }, [ctx?.core?.data?.propertyType]);

  useEffect(() => {
    const propertyType = ctx?.core?.data?.propertyType;
    const subpropertyType = ctx?.core?.data?.subPropertyType;
    if (ctx?.core?.data) ctx["core"]["data"] = {};
    if (ctx?.core?.data)
      ctx["core"]["data"] = {
        propertyType: propertyType,
        subPropertyType: subpropertyType,
      };
  }, [ctx?.core?.data?.subPropertyType]);

  return (
    <>
      {" "}
      <p className="text-2xl">{schema?.title}</p>
      <div style={{ display: "flex" }}>
        {subPropertyTypeList?.map((item: any, index) => (
          <div
            key={`${item}-${index}`}
            style={{
              marginLeft: "4px",

              color: selectedOption === item?.value ? "white" : "black",
              backgroundColor: selectedOption === item?.value ? "red" : "white",
              width: "fit",
            }}
            onClick={() => handleClick(item)}
          >
            {item?.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default withJsonFormsControlProps(SubPropertyTypeRenderer);
