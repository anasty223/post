import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./component/NotFound";
const Layout = lazy(() => import("./component/Layout/Layout"));
const Post = lazy(() => import("./component/Post/Post"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>...LOADING</div>}>
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/post" />} />
           
            <Route path="/post" element={<Post />} />

            <Route path="/" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

