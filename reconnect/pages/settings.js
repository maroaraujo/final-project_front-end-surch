import { useUser } from "@auth0/nextjs-auth0";
import Logout from "../component/Logout/logout";
import TabBar from "../component/TabBar/TabBar";

export default function Settings() {
  const { user, error, isLoading } = useUser();
  return (
    <main>
      <h1>Settings</h1>
      {user ? <Logout /> : null}
    </main>
  );
}
