import { Link } from "react-router-dom";

import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* <a href="/events">All Events</a> */}
            <Link to="">All Events</Link>
          </li>
          <li>
            <Link to="new">New Event</Link>
            {/* <a href="/events/new">New Event</a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
