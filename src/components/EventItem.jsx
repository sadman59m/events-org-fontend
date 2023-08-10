/* eslint-disable react/prop-types */
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const submit = useSubmit();
  const token = useRouteLoaderData("root");

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      submit(null, { method: "DELETE" });
    } else {
      return;
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}

      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {/* <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu> */}
    </article>
  );
}

export default EventItem;
