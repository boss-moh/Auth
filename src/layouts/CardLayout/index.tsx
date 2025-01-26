import { MenuLinks, Card } from "@/components";
import { Outlet } from "react-router";

export const CardLayout = () => {
  return (
    <>
      <Card className="relative max-w-md space-y-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Outlet />
      </Card>
      <MenuLinks />
    </>
  );
};

export default CardLayout;
