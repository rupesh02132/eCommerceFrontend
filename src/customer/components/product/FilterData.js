export const color=[
  "white",
  "Black",
 "Red",
 "Blue",
 "Green",
 "Yellow",
 "Orange",
]

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
     { value: "blue", label: "Blue" },
     { value: "green", label: "Green" },
    { value: "black", label: "Black" },
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "LX", label: "LX" },
     
    ],
  },
 
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "0-99", label: "₹0 - ₹99" },
      { value: "100-199", label: "₹100 - ₹199" },
      {value:"200-299",label:"₹200 - ₹299"},
      {value:"300-399",label:"₹300 - ₹399"},
      {value:"400-499",label:"₹400 - ₹499"},
      {value:"500-599",label:"₹500 - ₹599"},
      {value:"600-699",label:"₹600 - ₹699"},
      {value:"700-799",label:"₹700 - ₹799"},
    
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "0-10", label: "0% - 10%" },
      { value: "10-20", label: "10% - 20%" },
      { value: "20-30", label: "20% - 30%" },
      { value: "30-40", label: "30% - 40%" },
      { value: "40-50", label: "40% - 50%" },
      { value: "50-60", label: "50% - 60%" },
      { value: "60-70", label: "60% - 70%" },
      { value: "70-80", label: "70% - 80%" },
      { value: "80-90", label: "80% - 90%" },
      { value: "90-100", label: "90% - 100%" },
      ],
  },
  {
      id: "availability",
      name: "Availability",
      options: [
        { value: "in-stock", label: "In Stock" },
        { value: "out-of-stock", label: "Out of Stock" },
      ],
    }
];

