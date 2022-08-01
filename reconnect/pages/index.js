
import Head from "next/head";
import styles from "../styles/Home.module.css";
import DisplayLogo from "../component/DisplayLogo/DisplayLogo";
import MascotSmall from "../component/MascotSmall/MascotSmall";
import MoodQuestion from "../component/MoodQuestion/MoodQuestion";
import { useUser } from "@auth0/nextjs-auth0";
import Login from "../component/Login/login";


export default function Signup() {
  const { user, error, isLoading } = useUser();
  return (
    <main>
      <h1>Sign Up Page</h1>
      <Login />
    </main>
  );
}
