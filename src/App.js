import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./component/NotFound";
const Layout = lazy(() => import("./component/Layout/Layout"));
const Home = lazy(() => import("./component/Home/Home"));

const Post = lazy(() => import("./component/Post/Post"));



// const Loader = lazy(() => import("./components/Loader/Loader"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>...LOADING</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="posts" element={<Post/>} />

       

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;