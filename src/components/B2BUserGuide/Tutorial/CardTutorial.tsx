import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { useTutorial } from "../hooks/useTutorial";
import { useComponentsDictionary } from "locales/t/components";
import { cn } from "@/styles/utils";
import { CloseIcon } from "@/assets/feather-icons/CloseIcon";
import { PointerTutorialIcon } from "@/assets/feather-icons/pointer-tutorial-icon";

interface Props {
  continuous: boolean;
  index: number;
  step: any;
  size: number;
  backProps: any;
  closeProps: any;
  primaryProps: any;
  tooltipProps: any;
  moveOn: boolean;
}

export function CardTutorial({
  continuous,
  index,
  step,
  size,
  backProps,
  closeProps,
  primaryProps,
  tooltipProps,
  moveOn,
}: Props) {
  const router = useRouter();
  const { saveSteps } = useTutorial();
  const translate = useComponentsDictionary();

  const handleNextStep = (step: number) => {
    if (step == size) {
      return translate("Buttons.finish");
    } else {
      return `${translate("Buttons.next")} (${index + 1} / ${size})`;
    }
  };

  const handleNavigate = () => {
    switch (step.target) {
      case ".mira-tab":
        return router.push("/profile/mira");
      default:
    }
  };

  return (
    <div className="relative stack items-center">
      {step?.placement !== "center" && (
        <div
          className={cn(
            "stack items-center",
            step?.placement === "top"
              ? "absolute top-[90%] rotate-180"
              : "relative -top-[2.95rem]"
          )}
        >
          <div className="opacity-[0.7] mb-[0.75rem] rounded-full flex items-center justify-center w-[16px] h-[16px] bg-orange-shade9 bg-opacity-[0.5]">
            <div className="rounded-full w-[10px] h-[10px] bg-orange-shade9" />
          </div>
          <div className={styles.beacon}>{PointerTutorialIcon}</div>
        </div>
      )}

      <div
        {...tooltipProps}
        className={`p-[16px] rounded-[8px] w-[343px] border-[1px] border-orange-shade9 relative -top-[2.95rem] stack gap-y-[24px] bg-white shadow-xl`}
      >
        <div className="flex justify-between w-full items-center">
          <span className="text-[16px] font-bold text-blue-shade13">
            {step.title}
          </span>
          <button
            {...closeProps}
            className="[&_svg_path]:!stroke-blue-shade13 [&_svg]:w-[24px] [&_svg]:h-[24px] flex items-center justify-center p-[0px]"
          >
            {CloseIcon}
          </button>
        </div>

        <div className="ml-[4px]">
          {typeof step.content !== "string" ? (
            step.content
          ) : (
            <p className="text-[12px]">{step.content}</p>
          )}
        </div>

        <div className="flex justify-between items-center w-full">
          <button
            {...closeProps}
            className="text-[14px] !p-[0px] text-blue-shade13 dark-blue-shade font-bold"
          >
            {translate("Buttons.jump")}
          </button>

          <div className="flex items-center gap-x-[16.5px]">
            {index > 0 && (
              <button
                {...backProps}
                className="font-bold text-[14px] text-orange-shade9 px-[16px] py-[8px]"
              >
                {translate("Buttons.back")}
              </button>
            )}

            {continuous && (
              <button
                {...primaryProps}
                onClick={(event) => {
                  saveSteps(step.target as string);
                  primaryProps.onClick(event);
                  // handleNavigate();
                }}
                className="font-bold text-[14px] bg-orange-shade9 text-white px-[16px] py-[8px]"
              >
                {handleNextStep(index + 1)}
              </button>
            )}

            {moveOn && (
              <button
                {...primaryProps}
                onClick={(event) => {
                  saveSteps(step.target as string);
                  primaryProps.onClick(event);
                  handleNavigate();
                }}
                className="font-bold text-[14px] bg-orange-shade9 text-white px-[16px] py-[8px]"
              >
                {translate("Buttons.continue")}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
