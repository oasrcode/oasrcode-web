import { Project } from "../interface/IProject";

export default function ProjectCard({ data }: { data: Project }) {
  return (
    <div
      className="relative w-96 min-h-96 max-w-96 my-6 bg-gray-900 text-gray-200 rounded-lg shadow-lg shadow-black overflow-hidden transform transition duration-300 hover:scale-110"
     
    >
      <div className="flex items-center justify-between bg-gray-800 text-gray-400 px-4 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <p className="text-sm">{data.name}.tsx</p>
      </div>

      {data.images && data.images.length > 0 && (
        <div className="w-full h-48 overflow-hidden">
          <img className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-110" src={data.images[0]} alt={data.name} />
        </div>
      )}
      <div className="flex flex-col space-y-3 p-3">
        <p className="text-xl font-semibold text-yellow-500">{data.name}</p>
        <p className="text-gray-400 text-sm">{data.summ}</p>
      </div>

      <div className="absolute w-full flex flex-col gap-4 items-center justify-center bottom-0 mb-3">
        <div className="flex flex-row justify-start gap-1 w-full pl-3">
          {data.icons.map((icon, index) => (
            <span key={index} className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-xl p-1">
              {icon}
            </span>
          ))}
        </div>

        <a href={data.url} className="text-pink-500 hover:text-pink-700 text-sm font-medium" target="_blank" rel="noopener noreferrer">
          Ver Repositorio
        </a>
      </div>
    </div>
  );
}
