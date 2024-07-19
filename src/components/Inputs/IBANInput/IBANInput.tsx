import { useState } from "react";
import { BaseInput, IBaseInput } from "../BaseInput/BaseInput";
import { formatIban } from "./utils";

interface IBANInput extends Omit<IBaseInput, "value"> {
  countryCode?: string;
  iban?: string;
}

export function IBANInput({
  countryCode,
  onChange,
  iban: defaultIban,
  ...rest
}: IBANInput) {
  const [iban, setIBAN] = useState(defaultIban ? formatIban(defaultIban) : "");

  const handleInputChange = (input: string) => {
    const alphanumericInput = input.replace(/[^a-zA-Z0-9]/g, "");

    const maskFormat = "#### #### #### #### #### #### #";

    let formattedString = "";
    let maskIndex = 0;

    for (let i = 0; i < alphanumericInput.length; i++) {
      if (maskIndex < maskFormat.length) {
        if (maskFormat[maskIndex] === "#") {
          formattedString += alphanumericInput[i];
        } else {
          formattedString += maskFormat[maskIndex] + alphanumericInput[i];
          maskIndex++;
        }
      } else {
        formattedString += alphanumericInput[i];
      }

      maskIndex++;
    }

    formattedString = formattedString.slice(0, maskFormat.length);

    setIBAN(formattedString);
  };

  const handleBlur = () => {
    onChange?.(iban);
  };

  const handleOnFocus = () => {
    if (!iban && countryCode) setIBAN(countryCode);
  };

  return (
    <BaseInput
      value={iban}
      onChange={handleInputChange}
      onBlur={handleBlur}
      onFocus={handleOnFocus}
      {...rest}
    />
  );
}

export default IBANInput;
