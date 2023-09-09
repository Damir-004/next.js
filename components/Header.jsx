import Link from "next/link";

const Header = () => {
    return(
        <header className="main">
            <div className="container">
                <Link href="/">Home</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/users">Users</Link>
            </div>
        </header>
    )
}
export {Header};