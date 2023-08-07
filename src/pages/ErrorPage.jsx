import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An Error occured!";
  let message = "something went wrong";
  if (error.status === 500) message = JSON.parse(error.data).message;
  if (error.status === 404) message = "Page not found";
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>{message}</PageContent>
    </>
  );
};

export default ErrorPage;
