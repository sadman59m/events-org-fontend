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

  console.log(authData);

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "invalid request", status: 422 }, { status: 422 });
  }

  console.log(mode);

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (!response.ok) {
    return response;
  }

  if (response.status === 422 || response.status === 401) {
    return response;
  }
  return redirect("/");
}
