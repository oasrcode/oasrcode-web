import HistoricBlog from "../../components/HistoricBlog";

export default function BlogLayaout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col lg:flex-row w-11/12 lg:w-3/5 mx-auto h-auto">
      <div className="w-3/4 bg-slate-500">{children}</div>
      <div className="w-1/4 bg-red-300">
        <HistoricBlog />
      </div>
    </div>
  );
}
