import {
  ChangeEvent,
  ForwardedRef,
  HTMLInputTypeAttribute,
  useRef,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IUseBaseInput {
  ref: ForwardedRef<HTMLInputElement> | null;
  onChange?: (text: string) => void;
  onFocus?: () => void;
  register?: UseFormRegisterReturn<string>;
  type?: HTMLInputTypeAttribute;
}

export function useBaseInput({
  onChange,
  ref,
  onFocus,
  register,
  type,
}: IUseBaseInput) {
  const noPassedRef = useRef<HTMLInputElement | null>(null);
  const inputRef = register ? register?.ref : ref || noPassedRef;

  const handleOnChange = (event?: ChangeEvent<HTMLInputElement>) => {
    let inputValue = event?.target?.value;
    if (type === "number") {
      inputValue = inputValue?.replace(/[^0-9]/g, "");
    }

    onChange?.(inputValue ?? "");
    // if (event) register?.onChange?.(event);

    (inputRef as any)?.onChange?.(event);
  };

  const focusInput = () => {
    if ("current" in inputRef && inputRef?.current) {
      inputRef?.current?.click();
    } else if ("click" in inputRef && inputRef) {
      (inputRef?.click as any)?.();
    }
    onFocus?.();
  };

  return {
    inputRef,
    handleOnChange,
    focusInput,
  };
}
