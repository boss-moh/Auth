import { motion, MotionProps } from "framer-motion";
import { Button, ButtonProps } from "./button";

const MotionButton = motion(Button);

type AnimationButtonProps = ButtonProps & MotionProps;

export const AnimationButton = ({
  children,
  ...props
}: AnimationButtonProps) => {
  return (
    <MotionButton
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {children}
    </MotionButton>
  );
};
