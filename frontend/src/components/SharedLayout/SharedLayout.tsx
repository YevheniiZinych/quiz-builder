import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { memo } from "react";
import { Toaster } from "react-hot-toast";
import { NavBar } from "../NavBar/NavBar";
import { Container } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <Container>
      <NavBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <div>
        <Toaster />
      </div>
    </Container>
  );
};

export default memo(SharedLayout);
