import { b2cUri } from "@/utilities/routes";
import { useLayoutDictionary } from "locales/t/layout";
import { useRouter } from "next/router";
import { FiUser } from "react-icons/fi";

export function useMIRAOption() {
  const { push } = useRouter();
  const translate = useLayoutDictionary();

  return {
    miraOption: {
      name: translate("user.options.mira.label"),
      Icon: FiUser,
      onClick: () => {
        push(`${b2cUri}/profile/mira`);
        // push(`${b2cUri}/auth/verify`, {
        //   query: {
        //     redirect: "/profile/mira",
        //     accessToken: getAccessToken(),
        //   },
        // });
      },
    },
  };
}
