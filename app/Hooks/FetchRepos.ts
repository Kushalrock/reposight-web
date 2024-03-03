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
    const url = `http://localhost:5000/api/getReposAndIssues?${queryParams.toString()}`;

    const response: AxiosResponse = await axios.get(url);

    const data = response.data;
    console.log(data);

    if (response.status !== 200) {
      throw new Error(data.error || 'Failed to fetch repositories and issues');
    }

    return Object.values(data.data.repos) as Repo[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch repositories and issues');
  }
}

interface Repo {
  repo_id: string;
  name: string;
  description: string;
  tags: string[];
  avg_ratings: number;
  issues: Issue[];
  beginnerIssues: number;
  intermediateIssues: number;
  advancedIssues: number;
}

interface Issue {
  issue_id: string;
  title: string;
  description: string;
  difficulty: string;
  status: string;
}

export default fetchReposAndIssues;
