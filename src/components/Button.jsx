import "./Button.css";
import { motion } from "framer-motion"

export const Button = ({gradBg = "250, 250, 250", solidBg = "15, 15, 15", overlay = "255, 255, 255", fontSize = "16px", children}) => {
  return (
    <motion.button
      style={{
        "--radial-gradient-background": gradBg,
        "--solid-color-background": solidBg,
        "--overlay-color": overlay
      }}
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.03 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-6 py-2 rounded-md relative radial-gradient"
    >
      <span className={`text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask text-[${fontSize}]`}>
        {children}
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  )
}
