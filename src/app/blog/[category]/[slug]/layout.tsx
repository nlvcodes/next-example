export default async function Layout({children, params}: {
    children: React.ReactNode,
    params: Promise<{
        slug: string
        category: string
    }>
}) {
    const {slug, category} = await params
    return <>
        <p>this is the blog/[{category}]/[{slug}]/layout.tsx, use this for even more control</p>
        {children}
    </>
}