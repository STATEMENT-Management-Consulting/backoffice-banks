// import { NextResponse, NextRequest } from "next/server";
// import { AppKeys } from "./utilities/appKeys";
// import { AuthRoutes } from "./utilities/routes";
// import { isAccessTokenValid } from "./utilities/middleware/isAccessTokenValid";
// import { renewAccessToken } from "./utilities/middleware/renewAccessToken";

// export const config = {
//   matcher: ["/:path*"],
// };

// const middleware = async (request: NextRequest) => {
//   const { nextUrl, cookies, url } = request;
//   const pathname = nextUrl.pathname;
//   const refreshToken = cookies?.get(AppKeys.refreshToken)?.value;
//   const lang = "";

//   if (!refreshToken) {
//     if (!pathname?.startsWith(`${lang}${AuthRoutes.signIn}`)) {
//       const response = NextResponse.redirect(
//         new URL(`${lang}${AuthRoutes.signIn}`, nextUrl.origin)
//       );
//       return response;
//     }
//   } else {
//     const accessToken = cookies?.get(AppKeys.accessToken)?.value;

//     if (accessToken) {
//       const isTokenValid = await isAccessTokenValid(accessToken);
//       console.log("*** is the token valid", isTokenValid);

//       if (isTokenValid) {
//         console.log("*** is the token valid");
//         if (pathname?.startsWith(`${lang}${AuthRoutes.signIn}`))
//           return NextResponse.redirect(
//             new URL("/auth/companies", nextUrl.origin)
//           );

//         return NextResponse.next();
//       }
//     }

//     const tokens = await renewAccessToken(refreshToken);
//     console.log("a new token will be setted", tokens);

//     if (tokens) {
//       console.log("a new token will be setted");
//       if (pathname?.startsWith(`${lang}${AuthRoutes.signIn}`)) {
//         const response = NextResponse.redirect(
//           new URL(`${lang}${AuthRoutes.signIn}`, nextUrl.origin)
//         );
//         response.cookies.set(AppKeys.accessToken, tokens.accessToken);
//         response.cookies.set(AppKeys.refreshToken, tokens.refreshToken);
//         return response;
//       }
//       const response = NextResponse.next();
//       response.cookies.set(AppKeys.accessToken, tokens.accessToken);
//       response.cookies.set(AppKeys.refreshToken, tokens.refreshToken);

//       return response;
//     }
//   }

//   return NextResponse.next();
// };

// export default middleware;
