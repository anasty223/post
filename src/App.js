import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./component/NotFound";
import Animation from "./component/Animation/Animation";
import Navigation from "./component/Navigation.js/Navigation";
// import Navigation from "./component/Navigation.js/Navigation";
const Layout = lazy(() => import("./component/Layout/Layout"));
const Home = lazy(() => import("./component/Home/Home"));
const Post = lazy(() => import("./component/Post/Post"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>...LOADING</div>}>
        {/* <Post/> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/post" element={<Post />} />

            <Route path="/animation" element={<Animation />} />

            <Route path="/" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

// {/* <Route path="/" element={<Layout />}>
//           <Route index element={<Navigate to="sales" />} />
//           <Route path="dashboard" element={<div>Dashboard</div>} />
//           <Route path="sales" element={<Sales />}>
//             <Route index element={<div>Sales index route</div>} />
//             <Route path="analytics" element={<div>Analytics</div>} />
//             <Route path="invoices" element={<Invoices />}>
//               <Route index element={<div>Invoices index route</div>} />
//               <Route path=":invoiceId" element={<InvoiceDetails />} />
//             </Route>
//             <Route path="deposits" element={<div>Deposits</div>} />
//           </Route>
//           <Route path="reports" element={<div>Reports</div>} />
//           <Route path="feedback" element={<div>Feedback</div>} />
//           <Route path="customers" element={<Customers />} />
//           <Route path="customers/:customerId" element={<CustomerDetails />} />
//         </Route> */}

// "homepage": "https://anasty223.github.io/post",
