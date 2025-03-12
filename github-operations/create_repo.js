// GitHub Repository Creation Example

async function createNewRepository(repoName, description) {
    try {
        const response = await mcp.createRepository({
            name: repoName,
            description: description,
            private: false,
            autoInit: true
        });
        
        console.log('New repository created:', response.html_url);
        return response;
    } catch (error) {
        console.error('Error creating repository:', error);
        throw error;
    }
}

// Usage example:
// createNewRepository('test-repo', 'A test repository created for demonstration');