import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import {
  SignInPage,
  HomePage,
  SignUpPage,
  UserPage,
  AdminPage,
  UnauthorizedPage,
  NotFound,
} from "@/pages";
import { CardLayout, ProtectedLayout } from "@/layouts";
import { ROLES, URL_LINKS } from "@/constants";

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
          {/* <Route element={<ForwardLayout />}> */}
          {/* </Route> */}
          <Route path={URL_LINKS.HOME} element={<HomePage />} />
          <Route path={URL_LINKS.SIGN_UP} element={<SignUpPage />} />
          <Route path={URL_LINKS.SIGN_IN} element={<SignInPage />} />
          <Route path={URL_LINKS.UNAUTHORIZED} element={<UnauthorizedPage />} />
          <Route path={URL_LINKS.NOT_FOUND} element={<NotFound />} />
          <Route
            element={<ProtectedLayout whoCanSee={[ROLES.USER, ROLES.ADMIN]} />}
          >
            <Route path={URL_LINKS.USER} element={<UserPage />} />
          </Route>

          <Route element={<ProtectedLayout whoCanSee={[ROLES.ADMIN]} />}>
            <Route path={URL_LINKS.ADMIN} element={<AdminPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
