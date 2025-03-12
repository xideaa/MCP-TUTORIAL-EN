// Code Search Example

async function searchCodeInGitHub(searchQuery) {
    try {
        const response = await mcp.searchCode({
            q: searchQuery,
            per_page: 10
        });

        console.log('Search results:');
        response.items.forEach(item => {
            console.log(`- ${item.path} (${item.repository.full_name})`);
        });

        return response;
    } catch (error) {
        console.error('Error during code search:', error);
        throw error;
    }
}

// Usage example:
// searchCodeInGitHub('language:javascript express app');