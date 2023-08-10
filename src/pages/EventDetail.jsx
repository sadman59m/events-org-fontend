/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { Link, json, useRouteLoaderData, redirect } from "react-router-dom";

import { getToken } from "../util/auth";
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
  const response = await fetch(
    "https://event-orgs-backend.onrender.com/events/" + id
  );
  if (!response.ok) {
    throw json({ message: "Could not fetch data" }, { status: 500 });
  }
  return response;
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const token = getToken();

  const response = await fetch(
    "https://event-orgs-backend.onrender.com/events/" + eventId,
    {
      method: request.method,
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  if (!response.ok) {
    throw response;
  }
  return redirect("/events");
}
