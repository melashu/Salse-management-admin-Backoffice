const productInput = [
  {
    id: 0,
    label: "Product Name",
    htmlFor: "productname",
    type: "text",
    placeholder: "Book",
  },
  {
    id: 9,
    label: "Product Model",
    htmlFor: "model",
    type: "text",
    placeholder: "M006",
  },
  {
    id: 1,
    label: "Selling price",
    htmlFor: "sell",
    type: "number",
    placeholder: "300 Br",
  },
  {
    id: 2,
    label: "Purchase price",
    htmlFor: "buy",
    type: "number",
    placeholder: "250 Br",
  },
  {
    id: 3,
    label: "Quantity",
    htmlFor: "quantity",
    type: "number",
    placeholder: "100",
  },
  {
    id: 4,
    label: "Expired Date",
    htmlFor: "expire",
    type: "date",
  },
  {
    id: 5,
    label: "Purchase date",
    htmlFor: "purchase",
    type: "date",
  },
];


  const productOnSubmitHundler = (e) => {
    e.preventDefault();
    alert("Product");
  };
export { productInput, productOnSubmitHundler };