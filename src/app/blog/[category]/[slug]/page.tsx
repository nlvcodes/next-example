export const dynamicParams = false

export function generateStaticParams() {
    const posts = [
        { category: 'a', slug: 'blog-1' },
        { category: 'b', slug: 'blog-2' },
        { category: 'c', slug: 'blog-3' },
    ]

    return posts.map(post => ({
        slug: post.slug,
        category: post.category,
    }))
}

export default async function Page(
    {params}: {
        params: Promise<{
            slug: string
            category: string
        }>
    }
) {
    const {slug, category} = await params
    return <>
        <h1>{slug}</h1>
        <h2>{category}</h2>
    </>
}