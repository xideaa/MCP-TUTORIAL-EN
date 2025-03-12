// File Operations Example

async function updateFileInRepo(owner, repo, path, content, message) {
    try {
        const response = await mcp.createOrUpdateFile({
            owner: owner,
            repo: repo,
            path: path,
            message: message,
            content: Buffer.from(content).toString('base64'),
            branch: 'main'
        });

        console.log('File updated:', path);
        return response;
    } catch (error) {
        console.error('Error updating file:', error);
        throw error;
    }
}

// Usage example:
// updateFileInRepo('username', 'repo-name', 'test.txt', 'Hello World!', 'Test file added');