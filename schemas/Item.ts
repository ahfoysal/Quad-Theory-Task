import * as yup from "yup";

export const ItemSchema = yup.object().shape({
  name: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().required("Priority is required"),
});
