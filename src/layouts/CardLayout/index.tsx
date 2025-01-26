import { MenuLinks, Card } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router";

export const CardLayout = () => {
  const location = useLocation();

  return (
    <>
      <Card className="relative max-w-md space-y-2 -translate-x-1/2 top-1/4 left-1/2">
        <AnimatePresence>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </Card>
      <MenuLinks />
    </>
  );
};

export default CardLayout;
