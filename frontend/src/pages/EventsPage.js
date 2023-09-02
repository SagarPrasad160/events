import EventsList from "../components/EventsList";

import { useLoaderData, json } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();

  return <EventsList events={data.events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "Could not fetch Events." }, { status: 500 });
  }
  return response;
}
