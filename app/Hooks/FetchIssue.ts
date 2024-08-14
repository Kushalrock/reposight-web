import axios from 'axios';

interface Issue {
    repo_id: string;
    issue_id: string;
    difficulty: string;
    issue_title: string;
    issue_url: string;
    status: string;  
}

interface ApiResponse {
    data: Issue[];
    error: string | null;
    status: boolean;
}

const fetchRepoIssues = async (repoId: string, difficulty: string[] = []): Promise<Issue[]> => {
    try {
        // Construct the base URL for the API endpoint
        const baseUrl = `http://localhost:7000/api/issues/${repoId}`;

        // Initialize URLSearchParams to handle query parameters
        const params = new URLSearchParams();

        // Append difficulty parameters if provided
        if (difficulty.length > 0) {
            difficulty.forEach(d => params.append('difficulty', d));
        }

        // Construct the full URL with query parameters
        const apiUrl = `${baseUrl}?${params.toString()}`;

        console.log(apiUrl);

        // Fetch data from the API using Axios
        const response = await axios.get<ApiResponse>(apiUrl);

        // Extract data from the response
        const { data } = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('An error occurred while fetching data');
    }
};

export default fetchRepoIssues;
