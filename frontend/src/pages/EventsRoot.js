import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function EventsRoot() {
  return (
    <div>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default EventsRoot;
