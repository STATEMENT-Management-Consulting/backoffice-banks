import { SharableTypes } from "@/@types/Sharable.types";

export declare module CompanyModule {
  type Company = {
    id: string;
    additionalInformation: string;
    name: string;
    registrationName: string;
    creationDate: Date;
    nif: number;
    alvara?: string;
    industry: SharableTypes.Industry.Type;
    numberOfWorkers: string;
    hrDirector: string;
    emailHrDirector: string;
    favoriteCandidateCount?: number;
    website?: string;
    location: SharableTypes.Location;
    isVerified: "accepted" | "pending" | "rejected";
    contacts: {
      phone: string;
      optionalPhone?: string;
      email: string;
      optionalEmail?: string;
    };
    nifFile?: string;
    alvaraFile?: string;
    comercialCertified?: string;
    preferences?: boolean;
    description: string;
    logo?: string;
    typeOfCompany?: string;
    owner: Owner | null;
    simpleJobCount?: number;
    premiumJobCount?: number;
    platinumJobCount?: number;
    allJobsHadExpired?: "yes" | "no";
    isHeadhunter?: "available" | "not-available";
  };

  type Owner = {
    id: string;
    name: string;
    contact: {
      phone: string;
      secondPhone?: string;
    };
    email: string;
    avatar: string;
    position?: string;
    yearsOfExperience?: string;
    // isVerified?: boolean;
  };

  type Document = {
    company: string;
    name: string;
    expirationDate?: Date;
    file: string;
    id: string;
    status: "valid" | "invalid" | "pending" | "approved" | "rejected";
    required?: boolean;
    url: string;
    type: string;
  };

  type Service = {
    company: string;
    name: string[];
    createdAt: Date;
    updatedAt: Date;
    id: string;
  };

  type DocStatus = "valid" | "invalid" | "pending" | "approved" | "rejected";

  type ManagerRole = "super-admin" | "admin" | "user";
}
