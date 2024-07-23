import { SharableTypes } from "./Sharable.types";
import { UserType } from "./user.types";


export declare module CollaboratorsModule {
  type Role = "admin" | "manager" | "collaborator" | "owner";

  type SimpleCollaborator = {
    position: { id: string; name: string };
    id: string;
    user: {
      name: string;
      avatar: string;
      email?: string;
      location: string;
    };
  };

  type Collaborator = {
    id: string;
    user?: UserType;
    collaboratorId: string;
    name: string;
    email: string;
    phone?: string;
    optionalPhone?: string;
    socialSecurityNumber: string;
    businessId?: string;
    biNumber: string;
    nif: string;
    phoneNumber?: string;
    state: string;
    dateOfBirth: string;
    workschedule?: WorkSchedule;
    division: { id: string; name: string };
    status: string;
    company: { id: string; name: string; logo?: string };
    department: Department;
    departmentName: string;
    location: SharableTypes.Location;
    subsidies?: {
      id?: string;
      subsidy: {
        id: string;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        country?: string;
        percentage?: boolean;
      };
      value: number;
      country?: string;
      name?: string;
    }[];
    salary?: {
      coin: string;
      value: string;
    };
    position: {
      id: string;
      name: string;
    };
    bankingData: BankingData;
    contacts: Contacts;
    activityDescription: string;
    civilStatus: CivilStatus;
    role: Role;
    startDate: Date;
    status_entry?: boolean;
    collaboratorType: string;
    netSalary?: number;
    grossSalary?: number
  };

  type CivilStatus =
    | "single"
    | "married"
    | "divorced"
    | "widowed"
    | "separated"
    | "common_law";

  type BankingData = {
    bankAccount?: string;
    bankEntity?: string;
    swift?: string;
    iban: string;
  };

  type Contacts = {
    phone?: string;
    optionalPhone?: string;
    email?: string;
    optionalEmail?: string;
  };

  type WorkSchedule = {
    id: string;
    workHoursPerDay: number;
    workDays: Array<string>;
    totalWorkHoursPerWeek: number;
  };

  type Department = {
    id: string;
    name: string;
    type: "department" | "division";
    parentId?: string;
    manager?: SimpleCollaborator;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
}
