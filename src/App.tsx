import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Bookmarked from "./pages/Bookmarked";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import rootLoader from "./loaders/rootLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: rootLoader,
        },
        {
          path: "/Movies",
          element: <Movies />,
          loader: rootLoader,
        },
        {
          path: "/TVSeries",
          element: <TVSeries />,
          loader: rootLoader,
        },
        {
          path: "/Bookmarks",
          element: <Bookmarked />,
          loader: rootLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
