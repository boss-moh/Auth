import { MENU_LINKS } from "@/constants";
import { Link } from "react-router";
import { Card, Button } from "@/components";

export const MenuLinks = () => {
  return (
    <Card className="absolute p-2 -translate-x-1/2 bg-white top-4 left-1/2 ">
      <ul className="flex justify-between gap-2">
        {MENU_LINKS.map((linkItem) => (
          <li key={linkItem.text} className="space-y-0.5">
            <Button className="capitalize" size={"none"}>
              <Link className="p-2" to={linkItem.to}>
                {linkItem.text}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MenuLinks;
