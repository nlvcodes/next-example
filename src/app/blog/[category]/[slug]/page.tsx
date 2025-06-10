'use client'
import {use} from "react";
import Link from "next/link";

// export const dynamicParams = false

// export function generateStaticParams() {
//     const posts = [
//         { category: 'a', slug: 'blog-1' },
//         { category: 'b', slug: 'blog-2' },
//         { category: 'c', slug: 'blog-3' },
//     ]
//
//     return posts.map(post => ({
//         slug: post.slug,
//         category: post.category,
//     }))
// }

export default function Page(
    {
        params,
        searchParams,
    }: {
        params: Promise<{
            slug: string
            category: string
        }>,
        searchParams: Promise<{ [key: string]: string | string[] | undefined }>
    }
) {
    const {slug, category} = use(params)
      const { query } = use(searchParams)
    return <>
        <h1>{slug}</h1>
        <h2>{category}</h2>
        <p>This is the query: {query}</p>
        <Link
            className={'class'}
            target={'_self'}
            href={'/'}
            replace={false}
            scroll={true}
            prefetch={process.env.NODE_ENV === 'production'}
            onNavigate={(e) => {alert('navigated')}}
        >
            Home
        </Link>
    </>
}