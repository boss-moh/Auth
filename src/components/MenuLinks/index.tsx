import { buttonVariants } from "../ui/button";

import { MENU_LINKS } from "@/constants";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

export const MenuLinks = () => {
  return (
    <Card className="absolute p-2 -translate-x-1/2 bg-white top-4 left-1/2 ">
      <ul className="flex justify-between gap-2">
        {MENU_LINKS.map((linkItem) => (
          <li key={linkItem.text} className="space-y-0.5">
            <Link
              to={linkItem.to}
              className={cn(buttonVariants({ size: "sm" }), "capitalize")}
            >
              {linkItem.text}
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MenuLinks;
