import Body from "./ccomponents/Body";
import MainContainer from "./ccomponents/MainContainer";
import Head from "./ccomponents/Head";
import WatchPage from "./ccomponents/WatchPage";
import { Provider } from "react-redux";
import store from "./utility/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />

        {/**
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonList
         *    Videocontainer
         *      VideoCard
         */}
      </div>
    </Provider>
  );
}

export default App;
