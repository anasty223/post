import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styles";
import { Suspense } from "react";

export default function Layout() {
  return (
    <Container>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
