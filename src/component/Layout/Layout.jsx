import { NavLink, Outlet } from "react-router-dom";
import { SuperLink, Container } from "./Layout.styles";

export default function Layout() {
  return (
    <Container>
      <SuperLink to="/">Post</SuperLink> |
      <SuperLink to="/posts">Home</SuperLink>
      <Outlet />
    </Container>
  );
}

//      <Route path="movies" element={<MoviesPage />} />
//         <Route path="movies/:movieId" element={<MovieDetailPage />} />

//         <Route path="movies/:movieId" element={<MovieDetailPage />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
