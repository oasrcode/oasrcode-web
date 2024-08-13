import { animate } from "framer-motion";
import { MotionCarousel } from "./motion/Motions";

export default function InfiniteCarousel({ icons, direction }: { icons: any[]; direction: any }) {
  const animateX = direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"];
  return (
    <div className="relative overflow-hidden whitespace-nowrap lg:max-w-4xl mx-auto lg:py-4">
      <MotionCarousel className="inline-block whitespace-nowrap" animate={{ x: animateX }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
        {icons.concat(icons).map((icon, index) => (
          <span key={index} className="lg:text-4xl lg:mx-16 inline-block mx-4">
            {icon}
          </span>
        ))}
      </MotionCarousel>
      <MotionCarousel className="inline-block whitespace-nowrap" animate={{ x: animateX }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
        {icons.concat(icons).map((icon, index) => (
          <span key={index} className="lg:mx-16 inline-block mx-4">
            {icon}
          </span>
        ))}
      </MotionCarousel>
    </div>
  );
}
