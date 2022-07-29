import Link from "next/link";

export default function signup() {
    return (
    <main>    
    <h1>Sign Up Page</h1>
    <Link href="/api/auth/login">Login</Link>
    <Link href="/api/auth/logout">Logout</Link>
    </main>
    );
    }