import { NavLink, Outlet } from "react-router-dom";
import Navigation from "../Navigation.js/Navigation";
import { SuperLink, Container } from "./Layout.styles";

export default function Layout() {
  return (
    <Container>
      <Navigation/>
      {/* <SuperLink to="/">Posts</SuperLink> | */}
      {/* <SuperLink to="/home">Home</SuperLink> */}
      <Outlet />
    </Container>
  );
}

