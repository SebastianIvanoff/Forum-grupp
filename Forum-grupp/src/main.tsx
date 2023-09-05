import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateThreadPage from "./views/CreateThreadPage.tsx";
import ThreadDetails from "./views/ThreadDetails.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/create-thread",
        element: <CreateThreadPage />,
    },
    {
        path: "/thread/:threadId",
        element: <ThreadDetails />
    }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
