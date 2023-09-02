import { json, redirect, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

function EventDetail() {
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event} />;
}

export default EventDetail;

export async function loader({ request, params }) {
  const { eventId } = params;
  const response = await fetch("http://localhost:8080/events/" + eventId);
  if (!response.ok) {
    throw json({ message: "Could not fetch the event." }, { status: 500 });
  }
  return response;
}

export async function action({ request, params }) {
  console.log("action");
  const { eventId } = params;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }
  return redirect("/events");
}
