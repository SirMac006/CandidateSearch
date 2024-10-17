export const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 10000); 
    const response = await fetch(`https://api.github.com/users?since=${start}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    
    console.log('Response status:', response.status); // Log the response status
    
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Invalid API response: ${errorMessage}`);
    }
    
    return await response.json();
  } catch (err) {
    console.error('An error occurred:', err);
    return [];
  }
};
