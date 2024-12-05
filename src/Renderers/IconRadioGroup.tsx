// import React from "react";
// import {
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
// } from "@mui/material";
// import { withJsonFormsControlProps } from "@jsonforms/react";

// interface props {
//   data?: any;
//   handleChange?: any;
//   path?: any;
//   schema?: any;
//   uischema?: any;
// }

// const IconRadioGroup = ({
//   data,
//   handleChange,
//   path,
//   schema,
//   uischema,
// }: props) => {
//   const options = schema.enum || [];
//   const images = uischema.options?.enumImages || {};

//   const radioGroupStyle = {
//     display: "flex",
//     gap: "1rem",
//   };

//   const radioItemStyle = (isSelected: boolean) => ({
//     border: "2px solid #ddd",
//     borderRadius: "8px",
//     padding: "10px",
//     display: "flex",
//     flexDirection: "column" as const,
//     alignItems: "center",
//     backgroundColor: isSelected ? "#ffebee" : "transparent",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//     "&:hover": {
//       backgroundColor: "#f5f5f5",
//     },
//   });

//   const imageStyle = {
//     width: "50px",
//     height: "50px",
//     objectFit: "contain" as const,
//   };

//   return (
//     <FormControl component="fieldset">
//       <FormLabel component="legend">{schema.title || path}</FormLabel>
//       <RadioGroup
//         value={data || ""}
//         className=""
//         onChange={(e) => handleChange(path, e.target.value)}
//         style={radioGroupStyle}
//       >
//         {options.map((option: string) => (
//           <FormControlLabel
//             key={option}
//             value={option}
//             control={
//               <Radio
//                 sx={{
//                   display: "none", // Hide the default radio button
//                 }}
//               />
//             }
//             label={
//               <div style={radioItemStyle(data === option)}>
//                 <img src={images[option]} alt={option} style={imageStyle} />
//                 <span>{option}</span>
//               </div>
//             }
//             sx={{
//               margin: 0,
//               "&:hover": {
//                 backgroundColor: "transparent",
//               },
//             }}
//           />
//         ))}
//       </RadioGroup>
//     </FormControl>
//   );
// };

// export default withJsonFormsControlProps(IconRadioGroup);

import { useJsonForms, withJsonFormsControlProps } from "@jsonforms/react";
import { log } from "console";
import {
  ControlProps,
  defaultDateFormat,
  isDateControl,
  isDescriptionHidden,
  RankedTester,
  rankWith,
} from "@jsonforms/core";

const IconRadioGroup = ({
  data,
  handleChange,
  path,
  schema,
  uischema,
}: ControlProps) => {
  const options = schema.enum || [];
  const ctx = useJsonForms();
  const images = uischema.options?.enumImages || {};
  // console.log("schema", schema);
  // console.log("schem", ctx);

  return (
    <>
      <div className="flex space-y-10">
        {options.map((option: string) => (
          <div className="w-auto">{option}</div>
        ))}
      </div>
    </>
  );
};

export default withJsonFormsControlProps(IconRadioGroup);
