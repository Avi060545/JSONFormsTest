import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import CustomStepperRenderer from "./Renderers/CustomStepperRenderer";

const customRenderers = [
  ...materialRenderers,
  {
    tester: (uischema: any) =>
      uischema.options?.variant === "customStepper" ? 10 : -1,
    renderer: CustomStepperRenderer,
  },
];

function App() {
  const initialData = {};
  const [data, setData] = useState(initialData);

  // Sending the options dynamically fetched from our backend/Database
  const propertyTypeBackendFormat = [
    {
      title: "Residential",
      value: "residential",
    },
    {
      title: "Commercial",
      value: "commercial",
    },
    { title: "Industrial", value: "industrial" },
    { title: "Independent", value: "independent" },
    { title: "Others", value: "others" },
  ];

  const suitableForBackendFormat = [
    {
      title: "Jewellery",
      value: "jewellery",
    },
    {
      title: "Gym",
      value: "gym",
    },
    { title: "Grocery", value: "grocery" },
    { title: "Clinic", value: "clinic" },
    { title: "Footwear", value: "footwear" },
    { title: "Electronics", value: "electronics" },
    { title: "Clothing", value: "clothing" },
    { title: "Others", value: "others" },
  ];
  const possessionInfoBackendFormat = [
    {
      title: "Ready To Move",
      value: "ready_to_move",
    },
    {
      title: "Under Construction",
      value: "under_construction",
    },
  ];
  const subPropertyTypeBackendFormat = {
    residential: [
      { title: "Individual House", value: "individual_house" },
      { title: "Flats", value: "flat" },
      { title: "Villa", value: "villa" },
      { title: "Plot", value: "plot" },
    ],
    commercial: [
      { title: "Plot commercial", value: "plot_commercial" },
      { title: "Mall", value: "mall" },
      { title: "Office", value: "office" },
      { title: "Shops", value: "shops" },
      { title: "Others", value: "others" },
    ],
    industrial: [
      { title: "Godown", value: "godown" },
      { title: "Plant & machinery", value: "plant_machinery" },
      { title: "Goods", value: "goods" },
      { title: "Plot industrial", value: "plot_industrial" },
      {
        title: "Shed with plant & machinery",
        value: "shed_with_plant_machinery",
      },
      { title: "Industrial shed", value: "industrial_shed" },
      { title: "Industrial land", value: "industrial_land" },
    ],
    independent: [{ title: "Independent", value: "independent" }],
    others: [{ title: "Others", value: "others" }],
  };

  const locationHubBackendFormat = {
    plot_commercial: [],
    mall: [
      { title: "IT Park", value: "it-park" },
      { title: "Business Park", value: "business_park" },
      { title: "Others", value: "others" },
    ],
    office: [
      { title: "IT Park", value: "it-park" },
      { title: "Business Park", value: "business_park" },
      { title: "Others", value: "others" },
    ],
    shops: [],
    others: [
      { title: "Mall", value: "mall" },
      { title: "Office", value: "office" },
      { title: "Commercial Plot", value: "commercial_plot" },
      { title: "Retail Shops", value: "retail_shops" },
      { title: "Others", value: "others" },
    ],
  };

  const bhkBackendFormat = [
    {
      title: "RK",
      value: "rk",
    },
    {
      title: "1BHK",
      value: "1bhk",
    },
    {
      title: "2BHK",
      value: "2bhk",
    },
    {
      title: "3BHK",
      value: "3bhk",
    },
    {
      title: "4+BHK",
      value: "4+bhk",
    },
  ];

  // JSON Schema
  const test = {
    type: "object",
    properties: {
      propertyType: {
        type: "object",
        title: "Property Type",
      },
      subPropertyType: {
        type: "object",
        title: "Property Sub Type",
      },
      /// Optional fields start here
      bhk: {
        type: "object",
        title: "BHK",
      },
      possessionInfo: {
        type: "object",
        title: "Possession Info",
      },
      locationInfo: {
        type: "object",
        title: "Location Info",
      },
      suitableFor: {
        type: "object",
        title: "Suitable For",
      },

      ///building details
      purposeOfUse: {
        type: "string",
        description: "Please enter your name",
      },
      floor: {
        type: "string",
        description: "Please enter your name",
      },
      shedArea: {
        type: "string",
        description: "Please enter your name",
      },
      lift: {
        type: "string",
        description: "Please enter your name",
      },
      "loading/unloadingArea": {
        type: "string",
        title: "Loading/Unloading Area",
        description: "Please enter your name",
      },
      ceilingHeight: {
        type: "string",
        description: "Please enter your name",
      },
      fireSafety: {
        type: "string",
        description: "Please enter your name",
      },
      powerSupply: {
        type: "string",
        description: "Please enter your name",
      },
      waterSupplyAndDrainage: {
        type: "string",
        description: "Please enter your name",
      },
      productionCapacity: {
        type: "string",
        description: "Please enter your name",
      },
      parking: {
        type: "string",
        description: "Please enter your name",
      },
      typeOfMachinery: {
        type: "string",
        description: "Please enter your name",
      },
      typeOfGoods: {
        type: "string",
        description: "Please enter your name",
      },
      ///other details
      builtUpArea: {
        type: "integer",
        minLength: 3,
        minimum: 18,
        description: "Please enter your name",
      },
      carpetArea: {
        type: "string",
        minLength: 3,
        description: "Please enter your name",
      },
      udsArea: {
        type: "number",
        title: "UDS Area",
        minLength: 3,
        description: "Please enter your name",
      },
      landSize: {
        type: "string",
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
        description: "Please enter your name",
      },
      length: {
        type: "string",
        minLength: 3,
        description: "Please enter your name",
      },
      width: {
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
      //

      auctionType: {
        type: "object",
        title: "Auction Type",
        enum: bhkBackendFormat,
      },
    },
    required: ["propertyType"],
  };

  // JSON UISchema
  const testui = {
    type: "Categorization",
    elements: [
      {
        type: "VerticalLayout",
        elements: [
          { type: "Label", text: "Add your property details" },

          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                title: "",
                scope: "#/properties/propertyType",
                options: {
                  format: "propertyType",
                  additionalData: propertyTypeBackendFormat,
                },
              },
            ],
          },

          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                title: "",
                scope: "#/properties/subPropertyType",
                options: {
                  format: "subPropertyType",
                  additionalData: subPropertyTypeBackendFormat,
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/bhk",
                options: {
                  format: "bhkType",
                  additionalData: bhkBackendFormat,
                },
              },
            ],
          },

          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Possession Info",
                scope: "#/properties/possessionInfo",
                options: {
                  format: "propertyType",
                  additionalData: possessionInfoBackendFormat,
                },
              },
            ],
            rule: {
              effect: "SHOW",
              condition: {
                scope: "#/properties/propertyType/properties/value",
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
                title: "",
                scope: "#/properties/locationInfo",
                options: {
                  format: "locationHubType",
                  additionalData: locationHubBackendFormat,
                },
              },
            ],
            rule: {
              effect: "SHOW",
              condition: {
                scope: "#/properties/propertyType/properties/value",
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
                title: "",
                scope: "#/properties/suitableFor",
                options: {
                  format: "propertyType",
                  additionalData: suitableForBackendFormat,
                },
              },
            ],
            rule: {
              effect: "SHOW",
              condition: {
                scope: "#/properties/subPropertyType/properties/value",
                schema: {
                  const: "shops",
                },
              },
            },
          },
          ////bhk end
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/builtUpArea",
                option: {
                  validation: {
                    errorMessage: "Age must be at least 18",
                  },
                },
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
            rule: {
              effect: "SHOW",
              condition: {
                scope: "#/properties/subPropertyType/properties/value",
                schema: {
                  const: "flat",
                },
              },
            },
          },

          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/udsArea",
              },
            ],
            rule: {
              effect: "SHOW",
              condition: {
                scope: "#/properties/subPropertyType/properties/value",
                schema: {
                  const: "flat",
                },
              },
            },
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/landSize",
              },
            ],
            rule: {
              effect: "SHOW",
              condition: {
                type: "OR",
                conditions: [
                  {
                    scope: "#/properties/subPropertyType/properties/value",
                    schema: {
                      const: "individual_house",
                    },
                  },
                  {
                    scope: "#/properties/subPropertyType/properties/value",
                    schema: {
                      const: "villa",
                    },
                  },
                ],
              },
            },
          },
          // start of commercial building details
          {
            type: "Group",
            label: "Building Details",
            elements: [
              {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/builtUpArea",
                  },
                  {
                    type: "Control",
                    scope: "#/properties/floor",
                  },
                ],
              },
              {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/lift",
                  },
                  {
                    type: "Control",
                    scope: "#/properties/parking",
                  },
                ],
              },
            ],
            rule: {
              effect: "SHOW",
              condition: {
                scope: "#/properties/propertyType/properties/value",
                schema: {
                  const: "commercial",
                },
              },
            },
          },
          //start of industrial building details
          {
            type: "Group",
            label: "Building Details",
            elements: [
              {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/builtUpArea",
                  },
                  {
                    type: "Control",
                    scope: "#/properties/floor",
                  },
                ],
              },
              {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/loading~1unloadingArea",
                  },
                  {
                    type: "Control",
                    scope: "#/properties/parking",
                  },
                ],
              },
              {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/ceilingHeight",
                  },
                  {
                    type: "Control",
                    scope: "#/properties/fireSafety",
                  },
                ],
              },
              {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/powerSupply",
                  },
                  {
                    type: "Control",
                    scope: "#/properties/waterSupplyAndDrainage",
                  },
                ],
              },
              // Plant and Machinery
              {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/typeOfMachinery",
                  },
                  {
                    type: "Control",
                    scope: "#/properties/productionCapacity",
                  },
                ],
                rule: {
                  effect: "SHOW",
                  condition: {
                    scope: "#/properties/subPropertyType/properties/value",
                    schema: {
                      const: "plant_machinery",
                    },
                  },
                },
              },
              //goods
              {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/typeOfGoods",
                  },
                  {
                    type: "Control",
                    scope: "#/properties/productionCapacity",
                  },
                ],
                rule: {
                  effect: "SHOW",
                  condition: {
                    scope: "#/properties/subPropertyType/properties/value",
                    schema: {
                      const: "goods",
                    },
                  },
                },
              },
              //plotindustrial
              {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/productionCapacity",
                  },
                  {
                    type: "Control",
                    scope: "#/properties/productionCapacity",
                    rule: {
                      effect: "HIDE",
                      condition: {
                        scope: "#/properties/subPropertyType/properties/value",
                        schema: {
                          const: "plot_industrial",
                        },
                      },
                    },
                  },
                ],
                rule: {
                  effect: "SHOW",
                  condition: {
                    scope: "#/properties/subPropertyType/properties/value",
                    schema: {
                      const: "plot_industrial",
                    },
                  },
                },
              },
              // plantmachinery
              {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/productionCapacity",
                  },
                  {
                    type: "Control",
                    scope: "#/properties/shedArea",
                  },
                ],
                rule: {
                  effect: "SHOW",
                  condition: {
                    scope: "#/properties/subPropertyType/properties/value",
                    schema: {
                      const: "shed_with_plant_machinery",
                    },
                  },
                },
              },
              // industrial shed
              {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/purposeOfUse",
                  },
                  {
                    type: "Control",
                    scope: "#/properties/shedArea",
                  },
                ],
                rule: {
                  effect: "SHOW",
                  condition: {
                    scope: "#/properties/subPropertyType/properties/value",
                    schema: {
                      const: "industrial_shed",
                    },
                  },
                },
              },
              {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/productionCapacity",
                  },
                  {
                    type: "Control",
                    scope: "#/properties/productionCapacity",
                    rule: {
                      effect: "HIDE",
                      condition: {
                        scope: "#/properties/subPropertyType/properties/value",
                        schema: {
                          const: "industrial_shed",
                        },
                      },
                    },
                  },
                ],
                rule: {
                  effect: "SHOW",
                  condition: {
                    scope: "#/properties/subPropertyType/properties/value",
                    schema: {
                      const: "industrial_shed",
                    },
                  },
                },
              },
              //industrial land
              {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/productionCapacity",
                  },
                  {
                    type: "Control",
                    scope: "#/properties/purposeOfUse",
                  },
                ],
                rule: {
                  effect: "SHOW",
                  condition: {
                    scope: "#/properties/subPropertyType/properties/value",
                    schema: {
                      const: "industrial_land",
                    },
                  },
                },
              },
            ],
            rule: {
              effect: "SHOW",
              condition: {
                scope: "#/properties/propertyType/properties/value",
                schema: {
                  const: "industrial",
                },
              },
            },
          },
          // OTHER Details
          {
            type: "Label",
            text: "Other Details",
          },

          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/length",
                rule: {
                  effect: "SHOW",
                  condition: {
                    scope: "#/properties/subPropertyType/properties/value",
                    schema: {
                      const: "plot",
                    },
                  },
                },
              },
              {
                type: "Control",
                scope: "#/properties/width",
                rule: {
                  effect: "SHOW",
                  condition: {
                    scope: "#/properties/subPropertyType/properties/value",
                    schema: {
                      const: "plot",
                    },
                  },
                },
              },
            ],
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
      },
      {
        type: "VerticalLayout",
        elements: [
          { type: "Label", text: "Add your auction details" },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/propertyType",
                options: {
                  format: "propertyType",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/subPropertyType",
                options: {
                  format: "subPropertyType",
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

  return (
    <div className="App" style={{ margin: "40px" }}>
      <JsonForms
        schema={test}
        uischema={testui}
        data={data}
        renderers={customRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
    </div>
  );
}

export default App;
