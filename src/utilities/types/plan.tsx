export type TPlan = {
  planType: string;
  domainType: string;
  price: number;
  admin: string | number;
  jobPosting?: string;
  stageManagement?: boolean;
  employeeManagement?: string;
  preMadeTests?: boolean;
  comparativeAnalysis?: boolean;
  directRecruitment?: boolean;
  advancedScreeningTool?: boolean;
  analyticDashboards?: string;
  id: string;
};
