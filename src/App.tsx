import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Bookmarked from "./pages/Bookmarked";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";

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
        },
        {
          path: "/Movies",
          element: <Movies />,
        },
        {
          path: "/TVSeries",
          element: <TVSeries />,
        },
        {
          path: "/Bookmarks",
          element: <Bookmarked />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
