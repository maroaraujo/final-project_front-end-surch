import Link from "next/link";
import Home from "./home";

export default function signup() {
  return (
    <main>
      <h1>Sign Up Page</h1>
      <Link href="/api/auth/login">Login</Link>
      <Link href="/api/auth/logout">Logout</Link>
      <Home />
    </main>
  );
}
