export enum Routes {
  home = "/",
  profile = "/profile",
}

export enum AuthRoutes {
  signIn = "/auth/sign-in",
  verify = "/auth/verify",
  companies = "/auth/companies",
}

export const mirantesKey = process.env.NEXT_PUBLIC_MIRANTES_KEY ?? "";

export const b2cUri = process.env.NEXT_PUBLIC_B2C_URL ?? "";

export const b2bUri = process.env.NEXT_PUBLIC_B2B_URL ?? "";
export const billingUrl = process.env.NEXT_PUBLIC_BILLING_URL ?? "";

export const trustedDomains: string[] = [".mirantes.io"];
