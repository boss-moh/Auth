import { Button, Card, CardHeader, CardTitle } from "@/components";
import { MENU_LINKS } from "@/constants";
import { Link } from "react-router";

export const HomePage = () => {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-center">Home Page</CardTitle>
        <div>
          <ul className="flex flex-col gap-2">
            {MENU_LINKS.map((linkItem) => (
              <Card key={linkItem.text} className="p-2">
                <li className="space-y-0.5">
                  <h3 className="font-medium uppercase ">{linkItem.text}</h3>
                  <p className="capitalize">{linkItem.description}</p>
                  <Button asChild size={"sm"} className="capitalize">
                    <Link to={linkItem.to}>Go To {linkItem.text}</Link>
                  </Button>
                </li>
              </Card>
            ))}
          </ul>
        </div>
      </CardHeader>
    </>
  );
};

export default HomePage;
