import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const response = await fetch("http://localhost:8080/events/");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch data" }), {
      status: 500,
    });
  } else {
    return response;
  }
  // setIsLoading(false);
};
