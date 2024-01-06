import * as yup from "yup";

export const ItemSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  imageUrl: yup.string().required("Image is required"),
  description: yup.string().required("Description is required"),
  price: yup
    .number()
    .required("Price is required")
    .typeError("Price is required"),
});
