import {headers} from "next/headers";

type Filetree = {
    "tree": [
        { "path": string, }
    ]
}

export async function getPostByName(fileName: string): Promis<BlogPost | undefined> {
    const res = await fetch(`https://raw.githubusercontent.com/llgiant/test-blogposts/main/${fileName}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X_GitHub-Api_Version': '2022-11-28',
        }
    })
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
    const res = await fetch('https://api.github.com/repos/llgiant/test-blogposts/git/trees/master?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X_GitHub-Api_Version': '2022-11-28',
        }
    })
    if (!res.ok) return undefined

    const repoFileTree: Filetree = await res.json()

    const fileArray = repoFileTree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

    const posts: Meta[] = []

    for (const file of fileArray) {
        const post = await getPostByName(file)
        if (post) {
            const {meta} = post
            posts.push(meta)
        }
    }
    return posts.sort((a, b) => a.date < b.date ? 1 : -1)
}