import * as yup from "yup";

export const AttachmentInputSchema = yup.object({}).shape({
  name: yup.string().required("name-required"),
  attachment: yup.string().required("attachment-required"),
});
