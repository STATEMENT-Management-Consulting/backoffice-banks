import { useComponentsDictionary } from "../../locales/t/components";

export default function HomePage() {
  const translation = useComponentsDictionary();
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div>
        <h1 className="text-[5rem] text-primary">{translation("home")}</h1>
        <p className="text-[20px]">Welcome to the Backoffice Banks</p>
      </div>
    </div>
  );
}
