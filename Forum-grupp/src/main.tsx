import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateThreadPage from "./views/CreateThreadPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/create-thread",
        element: <CreateThreadPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
