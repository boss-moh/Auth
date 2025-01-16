export const URL_LINKS = {
  HOME: "/",
  SIGN_IN: "/auth/signin",
  SIGN_UP: "/auth/signup",
} as const;
// const NAV_LINKS = [
//   { text: "shop", link: URL_LINKS.SHOP },
//   { text: "On Sale", link: URL_LINKS.HOME },
//   { text: "new Arrivals", link: URL_LINKS.HOME },
//   { text: "brands", link: URL_LINKS.HOME },
// ] as const;
// export type of Nav
// const t = Partial typeof NAV_LINKS
export default URL_LINKS;
