import { Client, types } from 'cassandra-driver';

const client = new Client({
    contactPoints: ['localhost'],
    localDataCenter: 'datacenter1',
});

async function getFilteredRepos(languages: string[], domains: string[], difficulty: string[]): Promise<any[]> {
    try {
        let query = `SELECT * FROM reposight.repos`;
        const params: (string | types.Uuid)[] = [];

        if (languages && languages.length > 0) {
            query += ' WHERE ';
            query += '(';
            languages.forEach((lang, index) => {
                if (index > 0) query += ' OR ';
                query += `tags CONTAINS ?`;
                params.push(lang);
            });
            query += ')';
        }

        if (domains && domains.length > 0) {
            if (languages && languages.length > 0) query += ' AND ';
            else query += ' WHERE ';
            query += '(';
            domains.forEach((domain, index) => {
                if (index > 0) query += ' OR ';
                query += `tags CONTAINS ?`;
                params.push(domain);
            });
            query += ')';
        }

        if (difficulty && difficulty.length > 0) {
            if (languages || domains) query += ' AND ';
            else query += ' WHERE ';
            query += '(';
            difficulty.forEach((diff, index) => {
                if (index > 0) query += ' OR ';
                query += `difficulty = ?`;
                params.push(diff);
            });
            query += ')';
        }

        const reposResult = await client.execute(query, params, { prepare: true });
        const repos: any[] = reposResult.rows;
        
        return repos;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while fetching repositories.');
    }
}
export default getFilteredRepos;
