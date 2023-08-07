import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./pages/EventDetail";
import EventsPage from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import { loader as eventLoader } from "./pages/Events";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventLoader },
          {
            path: ":eventId",
            id: "event-details",
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage /> },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
