import axios, { AxiosResponse } from 'axios';

async function fetchReposAndIssues(languages: string[], difficulty: string[], topics: string[], page = 1, pageSize = 10): Promise<Repo[]> {
  const queryParams = new URLSearchParams();
  
  if (languages.length > 0) {
    queryParams.append('languages', languages.join(','));
  }
  if (difficulty.length > 0) {
    queryParams.append('difficulty', difficulty.join(','));
  }
  if (topics.length > 0) {
    queryParams.append('topics', topics.join(','));
  }
  queryParams.append('page', page.toString());
  queryParams.append('pageSize', pageSize.toString());

  console.log(queryParams);

  try {
    const url = `http://localhost:7000/api/repos/repos-issues?${queryParams.toString()}`;
    const response: AxiosResponse = await axios.get(url);

    const data = response.data;
    console.log(data);

    if (response.status !== 200) {
      throw new Error(data.error || 'Failed to fetch repositories and issues');
    }
    return data.data as Repo[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch repositories and issues');
  }
}

interface Repo {
  repo_id: string;
  repo_name: string;
  repo_desc: string;
  repo_url: string;
  avg_ratings: number;
  tags: string[];
  beginnerissues: number;
  intermediateissues: number;
  advancedissues: number;
  sum_of_community_ratings: number;
  sum_of_issue_classification_ratings: number;
  total_community_ratings: number;
  total_issue_classification_ratings: number;
  issues: Issue[];
}

interface Issue {
  issue_id: string;
  issue_title: string;
  difficulty: string;
  issue_url: string;
  status: string;
}

export default fetchReposAndIssues;
