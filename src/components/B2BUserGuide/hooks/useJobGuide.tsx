import { useEffect, useState } from "react";
import { useTutorial } from "./useTutorial";
import { useRouter } from "next/router";
import { TTutorials } from "@/components/B2BUserGuide/Tutorial/tutorials.type";
import { useApiGetCompany } from "@/views/profile/api/useApiGetCompany";
import { useTutorialsDictionary } from "locales/t/tutorials";

export function useJobGuide() {
  const router = useRouter();

  const { isGettingCompany } = useApiGetCompany();
  const { translate } = useTutorialsDictionary();
  const { notViewedSteps } = useTutorial();

  const [job_tutorials, setJob_tutorials] = useState<any[]>([]);
  const [runJobTutorial, setRunJobTutorial] = useState<boolean>(false);

  const job_tutorialsList: TTutorials[] = [
    {
      target: ".job-recruitment-details-tab",
      title: translate("Job.details.title"),
      content: translate("Job.details.content"),
    },
    {
      target: ".job-recruitment-stages-tab",
      title: translate("Job.stages.title"),
      content: translate("Job.stages.content"),
    },
    {
      target: ".job-recruitment-proposals-tab",
      title: translate("Job.proposals.title"),
      content: translate("Job.proposals.content"),
    },
    {
      target: ".job-recruitment-aside-collaborators",
      title: translate("Job.aside.title"),
      content: (
        <div className="flex flex-col gap-y-[0.5rem]">
          <p>{translate("Job.aside.content.description")}</p>
          <ol
            start={1}
            className="!list-decimal ml-[1rem] text-[14px] stack gap-y-[0.2rem]"
          >
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <li key={index}>
                  {translate(`Job.aside.content.${index}` as any)}
                </li>
              ))}
          </ol>
          <p>{translate("Job.aside.content.note")}</p>
        </div>
      ),
    },
  ];

  useEffect(() => {
    setJob_tutorials(notViewedSteps(job_tutorialsList));

    if (!isGettingCompany) {
      setRunJobTutorial(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGettingCompany, router.pathname]);

  return {
    job_tutorials,
    runJobTutorial,
    setRunJobTutorial,
  };
}
