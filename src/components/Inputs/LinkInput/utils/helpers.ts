import * as yup from "yup";

export const LinkInputSchema = yup.object({}).shape({
  name: yup.string().required("name-required"),
  url: yup.string().url("invalid-url").required("url-required"),
});
