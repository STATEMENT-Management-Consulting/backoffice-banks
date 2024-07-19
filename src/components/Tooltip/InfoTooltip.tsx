import { InfoIcon } from "@/assets/feather-icons/InfoIcon";
interface Props {
  info: string;
}

export function InfoTooltip({ info }: Props) {
  return (
    <div className="relative [&:hover>.info-tooltip]:!flex cursor-pointer [&_svg>path]:stroke-gray-shade7 [&_svg]:h-[16.25px] [&_svg]:w-[16.25px] rounded-[5px]">
      {InfoIcon}
      <div className="absolute info-tooltip top-[20px] left-[20px hidden">
        <div className=" tooltip_shadow bg-white gap-x-[10px] min-w-[200px] rounded-[5px] flex p-[10px]">
          <div className="bg-gray-shade7 bg-opacity-[0.16] w-[15px] h-[15px] rounded-full flex items-center justify-center">
            <div className="bg-gray-shade7 rounded-full w-[11.25px] h-[11.25px]" />
          </div>
          <span className="text-gray-shade7 text-[12px]">{info}</span>
        </div>
      </div>
    </div>
  );
}
