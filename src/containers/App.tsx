import { Layout } from "@layouts";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PATHS } from "src/configs";
import LoadingContainer from "./StartupContainer/LoadingContainer";

// Route containers
const Home = React.lazy(() => import("./Home"));

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<LoadingContainer />}>
          <Routes>
            <Route path={PATHS.ROOT} element={<Home />}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
