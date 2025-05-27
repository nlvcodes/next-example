export function generateStaticParams() {
    const portfolio = [
        { slug: ['a', '1', 'test']},
        { slug: ['b', '2', 'blog']},
        { slug: ['c', '3', 'port']},
        { slug: [] }
    ]

    return []
}

export default async function Page(
    {params}: {
        params: Promise<{
            slug: string[]
        }>
    }
) {
    const {slug} = await params
    return slug && slug.length > 0 ? <h1>{slug.join(', ')}</h1> : <h1>Portfolio Home Page</h1>
}