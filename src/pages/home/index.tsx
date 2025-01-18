import { buttonVariants } from "@/components/ui/button";
import SignUpPage from "../signup";
import { motion, AnimatePresence } from "framer-motion";
import { childrenProps } from "@/constants";
import { cn } from "@/lib/utils";

export const HomePage = () => {
  // const variants ={{}}
  return (
    <>
      <div className="">
        HomePage
        <motion.button
          className={cn(buttonVariants())}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          // drag={true}
          // dragConstraints={{ top: 100 }}
        >
          Change
        </motion.button>
        {/* <MyComponentTEst /> */}
        <Optional>
          {/* <SignInPage /> */}
          <SignUpPage />
        </Optional>
      </div>
      {/* <MyComponentttt /> */}

      {/* <motion.div
        className="w-full h-screen "
        initial={{ opacity: 0, background: "red" }}
        whileInView={{ opacity: 1, background: "blue" }}
        transition={{ duration: 1 }}
      >
        Content
      </motion.div> */}
    </>
  );
};

export default HomePage;

export const Optional = ({ children }: childrenProps) => {
  return (
    <motion.div
      className="max-w-md overflow-y-hidden "
      initial={{ height: "0" }}
      animate={{ height: "auto" }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
