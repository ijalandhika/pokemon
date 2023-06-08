import { FC } from "react";

interface ICategoryLoading {
  total: number;
}

const CategoryLoading: FC<ICategoryLoading> = ({ total }) => {
  return (
    <div className="mt-4">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {[...Array(total)].map((e, i) => (
            <a href="#" className="group my-2 animate-pulse" key={i.toString()}>
              <div className="bg-gray-300 rounded p-5 flex flex-col justify-center items-center relative h-6"></div>
              <div className="p-2 bg-gray-300 flex flex-col justify-center items-center relative"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryLoading;
