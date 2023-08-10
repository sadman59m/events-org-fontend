import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getExpirationTime } from "../util/auth";

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }
    if (token == "EXPIRED") {
      submit(null, { action: "/logout", method: "POST" });
      return;
    }
    const duration = getExpirationTime();
    console.log(duration);
    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, duration);
  }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
