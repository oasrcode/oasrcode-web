import { PropCard } from "../interface/CardProps";


export default function ExperienceCard({ data }: PropCard) {
  return (
    <div className="flex flex-col p-1 pl-2 gap-3 bg-white border-[1px] rounded-lg border-black mt-3 max-w-[400px] shadow-gray-700 shadow-lg">
      <p className="font-semibold">{data.name}</p>
      <p className=" text-sm text-wrap">{data.summ}</p>
      <div className="flex flex-row flex-wrap gap-2">{data.icons.map((icon, index) => icon)}</div>
    </div>
  );
}
