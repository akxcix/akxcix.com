import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import HomePage from "./routes/home-page";
import ContactPage from "./routes/contact-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage /> 
      },
      {
        path: "contact",
        element: <ContactPage />
      }
    ]
  },
])