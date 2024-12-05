// const test = {
//   type: "object",
//   properties: {
//     propertyType: {
//       type: "object",
//       title: "Property Type",
//     },
//     subPropertyType: {
//       type: "object",
//       title: "Property Sub Type",
//     },
//     ///
//     bhk: {
//       type: "object",
//       title: "BHK",
//     },
//     builtUpArea: {
//       type: "integer",
//       minLength: 3,
//       minimum: 18,
//       description: "Please enter your name",
//     },
//     carpetArea: {
//       type: "string",
//       minLength: 3,
//       description: "Please enter your name",
//     },
//     udsArea: {
//       type: "number",
//       title: "UDS Area",
//       minLength: 3,
//       description: "Please enter your name",
//     },
//     longitude: {
//       type: "string",
//       minLength: 3,
//       description: "Please enter your name",
//     },
//     latitude: {
//       type: "string",
//       minLength: 3,
//       description: "Please enter your name",
//     },

//     "Building/Project/Societyname": {
//       type: "string",
//       minLength: 3,
//       title: "Building/Project/Society Name",
//       description: "Please enter your name",
//     },
//     locality: {
//       type: "string",
//       minLength: 3,
//       description: "Please enter your name",
//     },
//     city: {
//       type: "string",
//       minLength: 3,
//       description: "Please enter your name",
//     },
//     pinCode: {
//       type: "string",
//       minLength: 3,
//       description: "Please enter your name",
//     },
//     locationLink: {
//       type: "string",
//       minLength: 3,
//       description: "Please enter your name",
//     },
//     possessionType: {
//       type: "string",
//       oneOf: [
//         {
//           const: "foo",
//           title: "Foo",
//         },
//         {
//           const: "bar",
//           title: "Bar",
//         },
//         {
//           const: "foobar",
//           title: "FooBar",
//         },
//       ],
//     },
//     scheduledAction: {
//       type: "string",
//       oneOf: [
//         {
//           const: "foo",
//           title: "Foo",
//         },
//         {
//           const: "bar",
//           title: "Bar",
//         },
//         {
//           const: "foobar",
//           title: "FooBar",
//         },
//       ],
//     },
//     description: {
//       type: "string",
//       minLength: 3,
//       description: "Please enter your name",
//     },
//     //

//     auctionType: {
//       type: "object",
//       title: "Auction Type",
//       enum: bhkBackendFormat,
//     },
//   },
//   required: ["propertyType", "builtUpArea"],
// };
// const testui = {
//   type: "Categorization",
//   elements: [
//     {
//       type: "VerticalLayout",
//       elements: [
//         { type: "Label", text: "Add your property details" },
//         {
//           type: "Label",
//           text: "Property Type",
//         },
//         {
//           type: "HorizontalLayout",
//           elements: [
//             {
//               type: "Control",
//               title: "",
//               scope: "#/properties/propertyType",
//               options: {
//                 format: "propertyType",
//                 additionalData: propertyTypeBackendFormat,
//               },
//             },
//           ],
//         },
//         {
//           type: "Label",
//           text: "Property Sub Type",
//         },
//         {
//           type: "HorizontalLayout",
//           elements: [
//             {
//               type: "Control",
//               title: "",
//               scope: "#/properties/subPropertyType",
//               options: {
//                 format: "subPropertyType",
//                 additionalData: subPropertyTypeBackendFormat,
//               },
//             },
//           ],
//         },

//         {
//           type: "HorizontalLayout",
//           elements: [
//             {
//               type: "Control",
//               scope: "#/properties/bhk",
//               options: {
//                 format: "bhkType",
//                 additionalData: bhkBackendFormat,
//               },
//             },
//           ],
//           rule: {
//             effect: "SHOW",
//             condition: {
//               type: "AND",
//               conditions: [
//                 {
//                   scope: "#/properties/subPropertyType/properties/value",
//                   schema: {
//                     not: { const: "plot" },
//                   },
//                 },
//                 {
//                   scope: "#/properties/propertyType/properties/value",
//                   schema: {
//                     const: "residential",
//                   },
//                 },
//               ],
//             },
//           },
//         },

//         {
//           type: "HorizontalLayout",
//           elements: [
//             {
//               type: "Control",
//               scope: "#/properties/builtUpArea",
//               option: {
//                 validation: {
//                   errorMessage: "Age must be at least 18",
//                 },
//               },
//             },
//           ],
//         },
//         {
//           type: "HorizontalLayout",
//           elements: [
//             {
//               type: "Control",
//               scope: "#/properties/carpetArea",
//             },
//           ],
//         },
//         {
//           type: "HorizontalLayout",
//           elements: [
//             {
//               type: "Control",
//               scope: "#/properties/udsArea",
//             },
//           ],
//         },
//         {
//           type: "Label",
//           text: "Other Details",
//         },

//         {
//           type: "HorizontalLayout",
//           elements: [
//             {
//               type: "Control",
//               scope: "#/properties/Building~1Project~1Societyname",
//             },
//             {
//               type: "Control",
//               scope: "#/properties/locality",
//             },
//           ],
//         },

//         {
//           type: "HorizontalLayout",
//           elements: [
//             {
//               type: "Control",
//               scope: "#/properties/city",
//             },
//             {
//               type: "Control",
//               scope: "#/properties/pinCode",
//             },
//           ],
//         },
//         {
//           type: "HorizontalLayout",
//           elements: [
//             {
//               type: "Control",
//               scope: "#/properties/longitude",
//             },
//             {
//               type: "Control",
//               scope: "#/properties/latitude",
//             },
//           ],
//         },
//         {
//           type: "HorizontalLayout",
//           elements: [
//             {
//               type: "Control",
//               scope: "#/properties/locationLink",
//             },
//           ],
//         },
//         {
//           type: "HorizontalLayout",
//           elements: [
//             {
//               type: "Control",
//               scope: "#/properties/possessionType",
//             },
//             {
//               type: "Control",
//               scope: "#/properties/scheduledAction",
//             },
//           ],
//         },
//         {
//           type: "Label",
//           text: "PROPERTY DESCRIPTION",
//         },
//         {
//           type: "HorizontalLayout",
//           elements: [
//             {
//               type: "Control",
//               scope: "#/properties/description",
//             },
//           ],
//         },
//         {
//           type: "Label",
//           text: "PROPERTY PHOTOS(OPTIONAL)",
//         },

//         // radio buttons
//       ],
//     },
//     {
//       type: "VerticalLayout",
//       elements: [
//         { type: "Label", text: "Add your auction details" },
//         {
//           type: "HorizontalLayout",
//           elements: [
//             {
//               type: "Control",
//               scope: "#/properties/propertyType",
//               options: {
//                 format: "propertyType",
//               },
//             },
//           ],
//         },
//         {
//           type: "HorizontalLayout",
//           elements: [
//             {
//               type: "Control",
//               scope: "#/properties/subPropertyType",
//               options: {
//                 format: "subPropertyType",
//               },
//             },
//           ],
//         },
//       ],
//     },
//   ],
//   options: {
//     variant: "customStepper",
//   },
// };
