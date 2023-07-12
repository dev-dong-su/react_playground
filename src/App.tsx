import { FC, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

import ErrorBoundary from "./components/bases/ErrorBoundary";

const MainPage = lazy(() => import("@pages/MainPage"));

interface AppProps {
  children?: never;
}

const App: FC<AppProps> = () => {
  return (
    <>
      <Helmet>
        <title>Boilerplate :: devdongsu</title>
      </Helmet>
      <ErrorBoundary>
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
