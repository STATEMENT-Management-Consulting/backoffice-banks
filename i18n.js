const globalNs = ["layout", "components"];

module.exports = {
  defaultLocale: "en",
  locales: ["pt", "en", "fr"],
  pages: {
    "*": globalNs,
    "/": ["dashboard/dashboard"],
    "/companies": ["companies/companies"],
    "/companies/[company]": ["companies/companies"],
    "/managers": ["managers/managers"],
  },
};
