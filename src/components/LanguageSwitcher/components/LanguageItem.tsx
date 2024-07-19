import Image from "next/image";

export function LanguageItem({
  icon,
  name,
  isActive,
  setCurrentCountry,
}: {
  icon: string;
  name: string;
  id: string;
  isActive?: boolean;
  setCurrentCountry: () => void;
}) {
  return (
    <div
      onClick={setCurrentCountry}
      className={`flex items-center py-3 transition-all hover:bg-primary hover:bg-opacity-10 cursor-pointer px-4 gap-x-2 w-full ${
        isActive && "bg-opacity-10 bg-primary"
      }`}
    >
      <Image src={icon} alt={name} className="w-4 h-4" />

      <span className="text-body-md text-gray-shade8">{name}</span>
    </div>
  );
}
