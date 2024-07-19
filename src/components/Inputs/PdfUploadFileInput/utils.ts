import * as yup from "yup";

// export const FileSchema = yup
//   .mixed()
//   .required("File is required")
//   .test("fileSize", "File is too large", (value) => {
//     if (!value) return true; // Skip validation if no file is selected
//     return (value!).size <= 1048576; // Max file size is 1 MB
//   })
//   .test("fileType", "Unsupported file type", (value) => {
//     if (!value) return true; // Skip validation if no file is selected
//     return ["image/jpeg", "image/png"].includes(value.type);
//   });
