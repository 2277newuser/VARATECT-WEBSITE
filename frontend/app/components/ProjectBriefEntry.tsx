"use client";

import { useSearchParams } from "next/navigation";
import ProjectBriefWizard from "./ProjectBriefWizard";

const projectDivisions: Record<string, string> = {
  home: "Vara Home",
  renovation: "Vara Revive",
  interiors: "Vara Pro",
  commercial: "Vara BIZ",
};

export default function ProjectBriefEntry() {
  const searchParams = useSearchParams();
  const project = searchParams.get("project");
  const initialDivision = project ? projectDivisions[project] : undefined;

  return (
    <ProjectBriefWizard
      key={initialDivision ?? "new-project"}
      initialDivision={initialDivision}
    />
  );
}
