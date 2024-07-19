import { useEffect, useState } from "react";
import { useTutorial } from "./useTutorial";
import { useRouter } from "next/router";
import { TTutorials } from "@/components/B2BUserGuide/Tutorial/tutorials.type";
import { useApiGetCompany } from "@/views/profile/api/useApiGetCompany";
import { useTutorialsDictionary } from "locales/t/tutorials";

export function useGetTutorialsRecruitmentJobs() {
  const router = useRouter();

  const { isGettingCompany } = useApiGetCompany();
  const { translate } = useTutorialsDictionary();
  const { notViewedSteps } = useTutorial();

  const [recruitmentJobs_tutorials, setRecruitmentJobs_tutorials] = useState<
    any[]
  >([]);
  const [runRecruitmentJobsTutorial, setRunRecruitmentJobsTutorial] =
    useState<boolean>(false);

  const recruitmentJobs_tutorialsList: TTutorials[] = [
    {
      target: ".tab-jobs-recruitment",
      title: translate("Jobs.tab-jobs.title"),
      content: translate("Jobs.tab-jobs.content"),
    },
    {
      target: ".create-job-recruitment-job",
      title: translate("Jobs.create-job.title"),
      content: translate("Jobs.create-job.content"),
    },
    {
      target: ".job-detail-recruitment-job",
      title: translate("Jobs.job-detail.title"),
      content: translate("Jobs.job-detail.content"),
    },
    {
      target: ".job-option-recruitment-job",
      title: translate("Jobs.job-option.title"),
      content: translate("Jobs.job-option.content"),
    },
  ];

  useEffect(() => {
    setRecruitmentJobs_tutorials(notViewedSteps(recruitmentJobs_tutorialsList));

    if (!isGettingCompany) {
      setRunRecruitmentJobsTutorial(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGettingCompany, router.pathname]);

  return {
    runRecruitmentJobsTutorial,
    recruitmentJobs_tutorials,
    setRunRecruitmentJobsTutorial,
  };
}
