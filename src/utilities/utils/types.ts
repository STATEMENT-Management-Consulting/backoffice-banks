export type CountryType = {
  id: string;
  name: string;
  nationality: {
    male: string;
    female: string;
  };
  currency: string;
  flag: {
    emoji: string;
    url: string;
  };
  phone_code: string;
};
