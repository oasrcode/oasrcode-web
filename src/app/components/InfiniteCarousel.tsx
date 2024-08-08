import { animate } from "framer-motion";
import { MotionCarousel } from "./motion/Motions";

export default function InfiniteCarousel({ icons, direction }: { icons: any[]; direction: any }) {
  const animateX = direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"];
  return (
    <div className="relative overflow-hidden whitespace-nowrap max-w-4xl mx-auto py-4">
      <MotionCarousel className="inline-block whitespace-nowrap" animate={{ x: animateX }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
        {icons.concat(icons).map((icon, index) => (
          <span key={index} className="text-4xl mx-16 inline-block">
            {icon}
          </span>
        ))}
      </MotionCarousel>
      <MotionCarousel className="inline-block whitespace-nowrap" animate={{ x: animateX }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
        {icons.concat(icons).map((icon, index) => (
          <span key={index} className="mx-16 inline-block">
            {icon}
          </span>
        ))}
      </MotionCarousel>
    </div>
  );
}
