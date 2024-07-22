export declare type UserType = {
  id: string;
  email: string;
  name: string;
  phone: string;
  optionalPhone: string;
  avatar: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isOwner?: boolean;
  location?: string;
  civilStatus?: string;
};
