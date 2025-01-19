import { Card } from "@/components/ui/card";
import { Outlet } from "react-router";

export const CardLayout = () => {
  return (
    <Card className="relative -translate-x-1/2 -translate-y-1/2 w-80 min-h-80 top-1/2 left-1/2">
      <Outlet />
    </Card>
  );
};

export default CardLayout;
