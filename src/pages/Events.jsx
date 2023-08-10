/* eslint-disable no-unused-vars */
import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";

import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  //await will be executed once the events/ events data been received
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>...Loading</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function eventsLoader() {
  const response = await fetch(
    "https://event-orgs-backend.onrender.com/events/"
  );

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch data" }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  return defer({
    // takes a object. will be exexuted by react router
    events: eventsLoader(), //events key holds the events data
  });
};
