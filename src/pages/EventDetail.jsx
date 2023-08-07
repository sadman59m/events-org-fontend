/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { Link, json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-details");
  const event = data.event;

  return (
    <>
      <EventItem event={event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json({ message: "Could not fetch data" }, { status: 500 });
  }
  return response;
}
