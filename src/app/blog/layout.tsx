
export default function Layout({children}: { children: React.ReactNode}) {
    return <main>
        <p>This is the blog/layout.tsx file, this can be used to handle custom logic at the route level</p>
        {children}
    </main>
}