export namespace PaymentIntent {
  export enum ProductType {
    Applications = "applications",
    B2bPlan = "b2b_plan",
  }
  export enum Platform {
    B2c = "b2c",
    B2b = "b2b",
  }

  export enum Person {
    User = "user",
    Company = "company",
  }

  export enum For {
    Company = "company",
    User = "user",
  }

  export enum Recurring {
    Year = "year",
    Month = "month",
    Once = "once",
  }

  export interface Model {
    id: string;
    platform: Platform;
    productId: string;
    currency: string;
    companyId: string;
    price: number;
    user: string;
    recurring?: Recurring;
    productType: ProductType;
    description: string;
    priceId?: string;
    mode: "payment" | "subscription";
    checkoutType: "b2c_applications" | "b2b_plan";
    metaData: Partial<
      | {
          applications: number;
          miraId: string;
        }
      | { companyId: "" }
    >;
  }
}
