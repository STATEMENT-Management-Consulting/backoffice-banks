import { useApiGetListOfJobs } from "@/views/recruitment/ListOfJobs/api/useApiGetListOfJobs";
import { useGetTutorialsRecruitmentJobs } from "../hooks/useGetTutorialsRecruitmentJobs";
import { TutorialRide } from "../Tutorial/TutorialRide";

export function JobsRecruitmentGuide() {
  const {
    recruitmentJobs_tutorials,
    runRecruitmentJobsTutorial,
    setRunRecruitmentJobsTutorial,
  } = useGetTutorialsRecruitmentJobs();

  const { jobs, isGettingJobs } = useApiGetListOfJobs();

  if (isGettingJobs) return null;

  return (
    <TutorialRide
      runTutorial={runRecruitmentJobsTutorial}
      steps={
        jobs?.length > 0
          ? recruitmentJobs_tutorials
          : [recruitmentJobs_tutorials[0], recruitmentJobs_tutorials[1]]
      }
      continuous
      setRunTutorial={setRunRecruitmentJobsTutorial}
    />
  );
}
