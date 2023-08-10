import { redirect } from "react-router-dom";

export function action() {
  const proceed = window.confirm("Confirm Logout");
  if (proceed) {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }

  return redirect("/");
}
