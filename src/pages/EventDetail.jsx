import { useParams, Link } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <p>Event ID: {params.eventId}</p>
      <Link to="edit">Edit event details</Link>
    </>
  );
}

export default EventDetailPage;
