import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/ErrorPage";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import { action as LogoutAction } from "./pages/Logout";
import { loader as tokenLoader, checkAuthRoute } from "./util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader, // loader data will be available in all the children. accesss by useRouteLoaderData
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-details",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader: checkAuthRoute,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader: checkAuthRoute,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: "logout",
        action: LogoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
