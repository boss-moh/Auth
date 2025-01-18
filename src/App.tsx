import { Route, Routes, useLocation } from "react-router";
import { URL_LINKS } from "./constants";
import { useEffect } from "react";
import { SignUpPage, SignInPage } from "./pages";
import ProtectedLayout from "./layouts/ProctedLayout";
import HomePage, { Optional } from "./pages/home";
import { AnimatePresence } from "framer-motion";

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
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<ProtectedLayout />}></Route>
          <Route path={URL_LINKS.HOME} element={<HomePage />} />
          <Route path={URL_LINKS.SIGN_IN} element={<SignInPage />} />
          <Route path={URL_LINKS.SIGN_UP} element={<SignUpPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
