const FormatePrice = ({ price }) => {
  return Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(price / 100);
};

export default FormatePrice;
