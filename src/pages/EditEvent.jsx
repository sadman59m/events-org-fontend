import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-details");
  return <EventForm event={data.event}></EventForm>;
}

export default EditEventPage;
