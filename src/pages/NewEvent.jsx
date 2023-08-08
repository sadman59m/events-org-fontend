/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { json, redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm method="post" />;
}

export default NewEventPage;
