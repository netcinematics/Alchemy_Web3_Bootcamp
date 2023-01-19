import Link from 'next/link'

export default function NavBooks() {

    return (
        <ul> 
        <li>
        <Link href="/">Home</Link>
        </li>
        <li>
        <Link href="/about">About Us</Link>
        </li>
        <li>
        <Link href="/blog/hello-world">Blog Post</Link>
        </li>
        </ul>
    )
}
