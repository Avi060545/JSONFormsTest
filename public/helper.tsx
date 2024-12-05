// rule: {
//   effect: "SHOW",
//   condition: {
//     scope: "#",
//     schema: {
//       properties: {
//         subPropertyType: {
//           properties: {
//             value: { const: "plot" },
//           },
//         },
//       },
//     },
//   },
// },
// rule: {
//   effect: "SHOW",
//   condition: {
//     type: "AND",
//     conditions: [
//       {
//         scope: "#/properties/city",
//         schema: {
//           const: "ab",
//         },
//       },
//       {
//         scope: "#/properties/pinCode",
//         schema: {
//           const: "ab",
//         },
//       },
//     ],
//   },
// },
// rule: {
//   effect: "SHOW",
//   condition: {
//     type: "AND",
//     conditions: [
//       {
//         scope: "#/properties/subPropertyType",
//         schema: {
//           properties: {
//             value: { not: { const: "plot" } },
//           },
//         },
//       },
//       {
//         scope: "#/properties/propertyType",
//         schema: {
//           properties: {
//             value: { const: "residential" },
//           },
//         },
//       },
//     ],
//   },
// },

const uischema = {
  type: "Categorization",
  elements: [
    {
      type: "VerticalLayout",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/propertyType",
              options: {
                format: "propertyType",
                additionalData: "",
              },
            },
          ],
        },
      ],
    },
  ],
  options: {
    variant: "customStepper",
  },
};

const propertyDetailsUiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Label",
      text: "Property Type",
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          title: "",
          scope: "#/properties/propertyType",
          options: {
            format: "radio",
          },
        },
      ],
    },
    {
      type: "Label",
      text: "Property Sub Type",
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/residentialPropertyType",
          options: {
            format: "radio",
          },
        },
      ],
      rule: {
        effect: "SHOW",
        condition: {
          scope: "#/properties/propertyType",
          schema: {
            const: "residential",
          },
        },
      },
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/commercialPropertyType",
          options: {
            format: "radio",
          },
        },
      ],
      rule: {
        effect: "SHOW",
        condition: {
          scope: "#/properties/propertyType",
          schema: {
            const: "commercial",
          },
        },
      },
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/industrialPropertyType",
          options: {
            format: "radio",
          },
        },
      ],
      rule: {
        effect: "SHOW",
        condition: {
          scope: "#/properties/propertyType",
          schema: {
            const: "industrial",
          },
        },
      },
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/independentPropertyType",
          options: {
            format: "radio",
          },
        },
      ],
      rule: {
        effect: "SHOW",
        condition: {
          scope: "#/properties/propertyType",
          schema: {
            const: "independent",
          },
        },
      },
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/otherPropertyType",
          options: {
            format: "radio",
          },
        },
      ],
      rule: {
        effect: "SHOW",
        condition: {
          scope: "#/properties/propertyType",
          schema: {
            const: "other",
          },
        },
      },
    },

    {
      type: "Label",
      text: "BHK",
      rule: {
        effect: "SHOW",
        condition: {
          scope: "#/properties/propertyType",
          schema: {
            const: "residential",
          },
        },
      },
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/bhk",
          options: {
            format: "radio",
          },
        },
      ],
      rule: {
        effect: "SHOW",
        condition: {
          scope: "#/properties/propertyType/value",
          schema: { const: "residential" },
        },
      },
    },

    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/builtUpArea",
        },
      ],
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/carpetArea",
        },
      ],
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/udsArea",
        },
      ],
    },
    {
      type: "Label",
      text: "Other Details",
    },

    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/Building~1Project~1Societyname",
        },
        {
          type: "Control",
          scope: "#/properties/locality",
        },
      ],
    },

    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/city",
        },
        {
          type: "Control",
          scope: "#/properties/pinCode",
        },
      ],
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/longitude",
        },
        {
          type: "Control",
          scope: "#/properties/latitude",
        },
      ],
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/locationLink",
        },
      ],
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/possessionType",
        },
        {
          type: "Control",
          scope: "#/properties/scheduledAction",
        },
      ],
    },
    {
      type: "Label",
      text: "PROPERTY DESCRIPTION",
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/description",
        },
      ],
    },
    {
      type: "Label",
      text: "PROPERTY PHOTOS(OPTIONAL)",
    },

    // radio buttons
  ],
};
const propertyDetailsSchema = {
  type: "object",
  properties: {
    propertyType: {
      type: "string",
      title: "",
      enum: ["residential", "commercial", "industrial", "independent", "other"],
    },
    residentialPropertyType: {
      type: "string",
      title: "",
      enum: ["individualhouse", "flat", "villa", "plot"],
    },
    commercialPropertyType: {
      type: "string",
      title: "",
      enum: ["plotcommercial", "mall", "office", "shops", "others"],
    },
    industrialPropertyType: {
      type: "string",
      title: "",
      enum: [
        "godown",
        "plantmachinery",
        "goods",
        "plotindustrial",
        "shedwithplantmachinery",
        "industrialshed",
        "industrialland",
      ],
    },
    independentPropertyType: {
      type: "string",
      title: "",
      enum: ["independent"],
    },
    otherPropertyType: {
      type: "string",
      title: "",
      enum: ["other"],
    },

    bhk: {
      type: "string",
      title: "",
      enum: ["1RK", "1BHK", "2BHK", "3BHK", "4+BHK"],
    },
    builtUpArea: {
      type: "string",
      minLength: 3,
      description: "Please enter your name",
    },
    carpetArea: {
      type: "string",
      minLength: 3,
      description: "Please enter your name",
    },
    udsArea: {
      type: "string",
      title: "UDS Area",
      minLength: 3,
      description: "Please enter your name",
    },
    longitude: {
      type: "string",
      minLength: 3,
      description: "Please enter your name",
    },
    latitude: {
      type: "string",
      minLength: 3,
      description: "Please enter your name",
    },

    "Building/Project/Societyname": {
      type: "string",
      minLength: 3,
      title: "Building/Project/Society Name",
      description: "Please enter your name",
    },
    locality: {
      type: "string",
      minLength: 3,
      description: "Please enter your name",
    },
    city: {
      type: "string",
      minLength: 3,
      description: "Please enter your name",
    },
    pinCode: {
      type: "string",
      minLength: 3,
      description: "Please enter your name",
    },
    locationLink: {
      type: "string",
      minLength: 3,
      description: "Please enter your name",
    },
    possessionType: {
      type: "string",
      oneOf: [
        {
          const: "foo",
          title: "Foo",
        },
        {
          const: "bar",
          title: "Bar",
        },
        {
          const: "foobar",
          title: "FooBar",
        },
      ],
    },
    scheduledAction: {
      type: "string",
      oneOf: [
        {
          const: "foo",
          title: "Foo",
        },
        {
          const: "bar",
          title: "Bar",
        },
        {
          const: "foobar",
          title: "FooBar",
        },
      ],
    },
    description: {
      type: "string",
      minLength: 3,
      description: "Please enter your name",
    },
    //Rough
  },
  required: [],
};
