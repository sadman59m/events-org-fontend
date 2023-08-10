import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const data = useActionData();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = useNavigation().state === "submitting";

  return (
    // Form here sends the form data to this active route that can be extracted using {request} and used in the action fuction
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmitting}>
            {isLogin
              ? `${isSubmitting ? "...loggin in" : "Log in"}`
              : `${isSubmitting ? "...submitting" : "submit"}`}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
