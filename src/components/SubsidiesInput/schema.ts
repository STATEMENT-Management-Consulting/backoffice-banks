import * as Y from "yup";

export const SubsidiesSchema = Y.object({
  name: Y.string().required(),
  country: Y.string().required(),
});

export type TSubsidiesSchema = Y.InferType<typeof SubsidiesSchema>;
