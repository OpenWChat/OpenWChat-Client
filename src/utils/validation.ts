import * as yup from "yup";

export const signUpSchema = yup.object({
  name: yup.string().required("Full name is Reqired"),
});
