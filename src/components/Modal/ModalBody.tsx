import { ReactNode, useMemo } from "react";
import { createPortal } from "react-dom";
import { v4 as uuid } from "uuid";
import modalStyles from "./Modal.module.css";
import { cn } from "@/styles/utils";

export interface IModal {
  onClose?: () => void;
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  overlayClickable?: boolean;
  overlayClick?: () => void;
  overlayClickClass?: string;
  centered?: boolean;
  rootClassName?: string;
  placement?: "right" | "left";
  isLoading?: boolean;
  bodyClassName?: string;
  title?: string;
}

export function ModalBody({
  children,
  isOpen,
  onClose,
  className,
  overlayClickable = true,
  overlayClickClass,
  centered,
  rootClassName,
  placement,
  isLoading,
  bodyClassName,
  overlayClick,
  title,
}: IModal) {
  const appPortal = document?.getElementById("app-portal");
  const modalId = useMemo(() => uuid(), []);

  if (!isOpen) return null;

  return appPortal
    ? createPortal(
        (
          <>
            <div
              className={cn(
                `fixed inset-0 flex justify-center z-[9999] overflow-hidden p-8`,
                placement === "right"
                  ? "!justify-end !pr-0 !py-0"
                  : placement === "left"
                  ? "!justify-start"
                  : "",
                centered ? "items-center" : "",
                rootClassName
              )}
            >
              <button
                type="button"
                className={cn(
                  `bg-black bg-opacity-20 absolute inset-0 z-[1] button-empty hover:!opacity-100 w-screen h-screen`,
                  overlayClickClass,
                  overlayClickable ? undefined : "pointer-events-none"
                )}
                onClick={overlayClickable ? overlayClick ?? onClose : undefined}
              />
              <div
                className={cn(
                  placement === "right"
                    ? modalStyles.Modal
                    : modalStyles.ModalCentered,
                  className,
                  placement === "right"
                    ? `right-0 min-h-screen rounded-none max-h-screen !inset-y-0 transition-all`
                    : "h-min max-h-[calc(100vh-4rem)]",
                  `card p-0 overflow-x-hidden overflow-y-auto relative z-[2] stack`
                )}
              >
                <div className={isLoading ? modalStyles.Loading : "h-[5px]"} />
                <div
                  className={cn(
                    "p-6 pt-[calc(1.5rem-5px)] h-full flex-grow",
                    bodyClassName,
                    title ? "stack gap-y-4" : undefined
                  )}
                >
                  {title && <h4>{title}</h4>}
                  {children}
                </div>
              </div>
            </div>
          </>
        ) as any,
        appPortal,
        modalId
      )
    : null;
}
