import { v4 as uuid } from "uuid";
import { toastIcons } from "./toastIcons";
import { RemoveIconString } from "@/assets/feather-icons/RemoveIcon";
import { useComponentsDictionary } from "locales/t/components";

interface ToastProps {
  title?: string;
  message?: string;
  delay?: number;
}

type TToast = (props: ToastProps | string) => void;
type TToastVariant = "success" | "error" | "warn" | "info";

const removeToast = (id: string) => {
  const toast = document?.getElementById(id);

  toast?.remove();
};

export function useToast() {
  const translate = useComponentsDictionary();
  const renderToast = (
    title: string | undefined,
    message: string,
    variant: TToastVariant,
    delay = 3 * 1000
  ) => {
    const toastsContainer = document.querySelector("#toasts-container");

    if (toastsContainer) {
      const toastId = uuid();
      const icon = toastIcons[variant];
      const variantColors = {
        success: "[&_.title]:text-green-shade8 [&_svg_*]:fill-green-shade8",
        error: "[&_.title]:text-red-shade7 [&_svg_*]:fill-red-shade7",
        warn: "[&_.title]:text-orange-shade6 [&_svg_*]:fill-orange-shade6",
        info: "[&_.title]:text-blue-shade10 [&_svg_*]:fill-blue-shade10",
      };
      const variantText = {
        success: translate("Toast.success"),
        error: translate("Toast.error"),
        warn: translate("Toast.warn"),
        info: translate("Toast.info"),
      };

      const toastContentTemplate = `<div class="p-4 rounded-[0.5rem] flex gap-x-3 slide-from-left items-start bg-white shade-md max-w-[320px] ${
        variantColors[variant]
      }">
          ${icon}
          <div class="stack gap-y-[0.31rem]">
            <p class="font-bold capitalize title">${
              title ?? variantText[variant]
            }</p>
            <p class="!text-text-dark">${message}</p>
          </div>
          <button type="button" class="button-empty [&_*]:!fill-text-dark">${RemoveIconString}</button>
        </div>`;
      const newToast = document.createElement("div");
      newToast.setAttribute("id", toastId);
      newToast.innerHTML = toastContentTemplate;
      const remove = newToast.querySelector("button");
      remove?.addEventListener("click", () => {
        removeToast(toastId);
      });
      toastsContainer.appendChild(newToast);

      setTimeout(() => {
        removeToast(toastId);
      }, delay);
    }
  };

  const toastHandler = (type: TToastVariant, props: ToastProps | string) => {
    if ((props as ToastProps)?.title) {
      const { title = "", message = "", delay } = props as ToastProps;
      renderToast(title, message, type, delay);
    } else {
      renderToast(undefined, props as string, type);
    }
  };

  const successToast: TToast = (props) => toastHandler("success", props);
  const errorToast: TToast = (props) => toastHandler("error", props);
  const infoToast: TToast = (props) => toastHandler("info", props);
  const warnToast: TToast = (props) => toastHandler("warn", props);

  return {
    successToast,
    errorToast,
    warnToast,
    infoToast,
  };
}
