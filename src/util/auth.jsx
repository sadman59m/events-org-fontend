import { redirect } from "react-router-dom";

export function getExpirationTime() {
  const storedExpiration = localStorage.getItem("expiration");
  const expiration = new Date(storedExpiration);
  const now = new Date();
  const duration = expiration.getTime() - now.getTime();
  return duration;
}

export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const duration = getExpirationTime();
  if (duration < 0) {
    return "EXPIRED";
  }
  return token;
}

export function loader() {
  return getToken();
}

export function checkAuthRoute() {
  const token = getToken();

  if (!token) {
    return redirect("/auth");
  }
  return null;
}
