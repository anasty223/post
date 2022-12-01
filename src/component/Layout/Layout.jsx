import { NavLink, Outlet } from "react-router-dom";
import Navigation from "../Navigation.js/Navigation";
import {  Container } from "./Layout.styles";
import { Suspense } from 'react';

export default function Layout() {
  return (
    <Container>
  {/* <Navigation/> */}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
   
    </Container>
  );
}

