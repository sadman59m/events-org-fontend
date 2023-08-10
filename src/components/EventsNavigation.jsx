import { NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  // check authentication token
  const token = useRouteLoaderData("root");
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* <a href="/events">All Events</a> */}
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Events
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink
                to="new"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                New Event
              </NavLink>
              {/* <a href="/events/new">New Event</a> */}
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
