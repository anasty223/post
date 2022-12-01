import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./component/NotFound";
import Animation from "./component/Animation/Animation";
// import Navigation from "./component/Navigation.js/Navigation";
const Navigation = lazy(() => import("./component/Navigation.js/Navigation"));
const Home = lazy(() => import("./component/Home/Home"));
const Post = lazy(() => import("./component/Post/Post"));





function App() {
  return (
    <div className="App">
   
      <Suspense fallback={<div>...LOADING</div>}>
      {/* <Post/> */}
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home/>} />

            <Route path="/post" element={<Post/>} />

            <Route path="/animation" element={<Animation/>} />


            <Route path="/" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;