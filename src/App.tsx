import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/NotFound";
const Home = lazy(() => import("./pages/Home"));
const Companies = lazy(() => import("./pages/Companies"));
const Property = lazy(() => import("./pages/Property"));
const PropertyDetails = lazy(() => import("./pages/PropertyDetails"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          ></Route>

          <Route
            path="/companies"
            element={
              <Suspense>
                <Companies />
              </Suspense>
            }
          ></Route>

          <Route
            path="/property"
            element={
              <Suspense>
                <Property />
              </Suspense>
            }
          ></Route>

          <Route
            path="/property-details/:id"
            element={
              <Suspense>
                <PropertyDetails />
              </Suspense>
            }
          ></Route>

          <Route
            path="*"
            element={
              <Suspense>
                <NotFound />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
