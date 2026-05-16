export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

export async function getPinnedRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch repos: ${res.statusText}`);
    }
    
    const repos: GitHubRepo[] = await res.json();
    
    // Sort by stars to mimic "pinned" repos
    return repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
