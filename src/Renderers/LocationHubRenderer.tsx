import { useJsonForms, withJsonFormsControlProps } from "@jsonforms/react";
import {
  ControlProps,
  rankWith,
  isDescriptionHidden,
  isDateControl,
} from "@jsonforms/core";
import { useEffect, useState } from "react";

export const LocationHubRenderer = ({
  data,
  handleChange,
  path,
  schema,
  uischema,
}: ControlProps) => {
  const ctx = useJsonForms();
  const options = uischema?.options?.additionalData || {};

  const [selectedOption, setSelectedOption] = useState("");
  const [locationList, setLocationList] = useState([]);
  const handleClick = (item: any) => {
    setSelectedOption(item?.value);
    handleChange(path, item);
  };

  useEffect(() => {
    setLocationList(options[ctx?.core?.data?.subPropertyType?.value]);
    console.log(ctx?.core?.data?.subPropertyType?.value);
  }, [ctx?.core?.data?.subPropertyType]);

  return (
    <>
      {" "}
      {locationList?.length > 0 ? (
        <>
          <p className="text-2xl">{schema?.title}</p>
          <div style={{ display: "flex" }}>
            {locationList?.map((item: any, index) => (
              <div
                key={`${item}-${index}`}
                style={{
                  marginLeft: "4px",

                  color: selectedOption === item?.value ? "white" : "black",
                  backgroundColor:
                    selectedOption === item?.value ? "red" : "white",
                  width: "fit",
                }}
                onClick={() => handleClick(item)}
              >
                {item?.title}
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default withJsonFormsControlProps(LocationHubRenderer);
