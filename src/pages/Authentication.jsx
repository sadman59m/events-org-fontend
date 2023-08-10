/* eslint-disable react-refresh/only-export-components */
import { redirect, json } from "react-router-dom";

import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const data = await request.formData();

  // getting serachParams uisng browser feature URL
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode");
  console.log(mode);

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "invalid request", status: 422 }, { status: 422 });
  }

  const response = await fetch(
    "https://event-orgs-backend.onrender.com/" + mode,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    }
  );

  if (!response.ok) {
    return response;
  }

  if (response.status === 422 || response.status === 401) {
    return response;
  }
  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());
  return redirect("/events");
}
