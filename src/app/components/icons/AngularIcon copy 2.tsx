import { IconProps } from "@/app/interface/IconProps";

export default function AngularIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <path d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z" fill="#DD0031" />
      <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F" />
      <path d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z" fill="white" />
    </svg>
  );
}
