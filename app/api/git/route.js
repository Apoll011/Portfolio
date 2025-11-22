import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const repo = searchParams.get("repo");

        if (!repo) {
            return NextResponse.json(
                { error: "Missing 'repo' query parameter" },
                { status: 400 }
            );
        }

        const token = process.env.GITHUB_TOKEN;

        const response = await fetch(`https://api.github.com/repos/${repo}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: `GitHub API error: ${response.status}` },
                { status: response.status }
            );
        }

        const data = await response.json();

        return NextResponse.json(
            {
                stars: data.stargazers_count || 0,
                forks: data.forks_count || 0,
                issues: data.open_issues_count || 0,
                language: data.language || "",
                license: data.license?.name || null,
                createdAt: data.created_at,
                updatedAt: data.updated_at,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch GitHub repo info" },
            { status: 500 }
        );
    }
}
