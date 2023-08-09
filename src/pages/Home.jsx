import { Link } from "react-router-dom";
import PageContent from "../components/PageContent";

function HomePage() {
  const buttonContent = "Get Started";
  return (
    <PageContent title="Welcome to Event Orgs.">
      <p>Create an event. Let others know.</p>
      <div>
        <Link to="auth?mode=login">{buttonContent}</Link>
      </div>
    </PageContent>
  );
}

export default HomePage;
