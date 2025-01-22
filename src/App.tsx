import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { SignInPage, HomePage } from "@/pages";
import { CardLayout, ProtectedLayout } from "@/layouts";
import { URL_LINKS } from "@/constants";
import ForwardLayout from "./layouts/ForwardLayout";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="h-screen bg-gray-100">
      <ScrollToTop />
      <Routes>
        <Route element={<CardLayout />}>
          <Route element={<ProtectedLayout />}>
            <Route path={URL_LINKS.HOME} element={<HomePage />} />
          </Route>
          <Route element={<ForwardLayout />}>
            <Route path={URL_LINKS.SIGN_IN} element={<SignInPage />} />
          </Route>
          {/* <Route path={URL_LINKS.SIGN_UP} element={<SignUpPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
}
