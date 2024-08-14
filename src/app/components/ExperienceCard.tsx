import { PropProject } from "../interface/IProject";


export default function ExperienceCard({ data }: PropProject) {
  return (
    <div className="flex flex-col p-1 pl-2 gap-3 bg-white  rounded-lg  mt-3 max-w-[600px] shadow-gray-700 shadow-lg  ease-in-out duration-200 hover:scale-105 ">
      <p className="font-semibold">{data.name}</p>
      <p className=" text-sm text-wrap">{data.summ}</p>
      <div className="flex flex-row flex-wrap gap-2">{data.icons.map((icon, index) =><span key={index}>{icon}</span> )}</div>
    </div>
  );
}
