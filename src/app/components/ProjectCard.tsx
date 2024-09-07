import { Project } from "../interface/IProject";
import RepoIcon from "./icons/RepoIcon";

export default function ProjectCard({ data }: { data: Project }) {
  return (
    <div className="relative w-auto md:w-96  min-h-96 h-[540px] my-6 bg-gray-900 text-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="flex items-center justify-between bg-gray-800 text-gray-400 px-4 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <p className="text-sm font-mono">{data.name}.tsx</p>
      </div>

      <div className="flex flex-col space-y-3 p-4">
        <div className="flex flex-row items-center justify-between">
          <p className="text-2xl font-semibold text-yellow-500">{data.name}</p>

          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <RepoIcon width={25} height={25} />
          </a>
        </div>

        {data.image ? (
          <div className="w-full h-48 overflow-hidden rounded-md">
            <img className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" src={data.image} alt={data.name} />
          </div>
        ) : null}
        <p className="text-neutral-300 text-sm leading-relaxed tracking-wide">{data.summ}</p>
      </div>

      <div className="absolute bottom-3 w-full flex flex-col gap-4 items-center">
        <div className="flex flex-row justify-start gap-2 w-full pl-4">
          {data.icons.map((icon, index) => (
            <span key={index} className="flex items-center justify-center w-10 h-10 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 transition-colors duration-200">
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
