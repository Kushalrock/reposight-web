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
        // Construct the URL for the API endpoint
        let apiUrl = `http://localhost:5000/api/getRepoIssues?repo_id=${repoId}`;
        if (difficulty.length > 0) {
            // Encode each difficulty separately and join them with commas
            const encodedDifficulties = difficulty.map(encodeURIComponent).join(',');
            apiUrl += `&difficulty=${encodedDifficulties}`;
        }

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
