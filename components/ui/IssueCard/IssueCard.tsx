'use client'
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import fetchRepoIssues from "@/app/Hooks/FetchIssue";
import useFilterStore from "@/app/Store/store";

interface Issue {
  repo_id: string;
  issue_id:string,
  difficulty:string,
  issue_title:string,
  issue_url:string,
  status:string,  
}

interface Props {
  repoId: string;
}

const IssueCard: React.FC<Props> = ({ repoId }) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const difficulty = useFilterStore((state) => state.difficulties);
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        // Call fetchIssues function to get issue details
        console.log(difficulty);
        const fetchedIssues: Issue[] = await fetchRepoIssues(repoId,difficulty);
        // Set the state with fetched data
        setIssues(fetchedIssues);
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };

    fetchIssues();
  }, [repoId]); // Call fetchIssues whenever repoId changes

  return (
    <div>
      {issues.map((issue, index) => (
        <Card key={index} className="w-full mt-8 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">{issue.issue_title}</p>
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex flex-row justify-between">
              <div>Difficulty: {issue.difficulty}</div>
              <div>Status: {issue.status}</div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default IssueCard;
