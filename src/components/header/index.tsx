import Image from "next/image";
import SkillPills from "./skill-pills";

export default function Header() {
  return (
    <div className="flex flex-col justify-center gap-4 px-4 py-10 sm:items-center sm:px-6">
      <div className="flex justify-between sm:hidden">
        <div className="relative h-16 w-16">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <Image
              className="border-1 flex h-16 w-16 items-center justify-center rounded-full border-white bg-white bg-cover bg-center bg-no-repeat object-cover transition-opacity hover:opacity-90"
              src="/assets/milindmishra.png"
              alt="Milind Mishra"
              width="64"
              height="64"
            />
          </div>
        </div>
      </div>
      <div className="hidden hover:cursor-pointer sm:block">
        <div className="relative h-20 w-20">
          <div className="h-20 w-20 overflow-hidden rounded-full">
            <Image
              className="border-1 flex h-20 w-20 items-center justify-center rounded-full border-white bg-white bg-cover bg-center bg-no-repeat object-cover transition-opacity hover:opacity-90"
              src="/assets/milindmishra.png"
              alt="Milind Mishra"
              width="80"
              height="80"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 sm:items-center">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold">Milind Mishra 👑</h1>
        </div>
        <h2 className="text-gray-gray1k text-sm font-normal sm:text-center">
          Freelancing & Building Passion Projects
        </h2>
      </div>
      <SkillPills />
    </div>
  );
}
