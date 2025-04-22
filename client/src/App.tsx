import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import RootComponent from "./components/RootComponent/RootComponent.tsx";
import BlogPage from "./pages/BlogPage/BlogPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootComponent />,
        children: [
            { index: true, element: <BlogPage /> },
            { path: "discover", element: <BlogPage /> },
            { path: "my-plants", element: <BlogPage /> },
            { path: "diseases", element: <BlogPage /> },
            { path: "blog", element: <BlogPage /> },
            { path: "faq", element: <BlogPage /> },
            { path: "contact-us", element: <BlogPage /> },
            { path: "not-found", element: <Navigate to="/" replace /> },
            { path: "*", element: <Navigate to="/" replace /> },
        ],
    },
]);

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
