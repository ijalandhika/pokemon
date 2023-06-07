import Card from "@/components/card";
import type { ICard } from "@/components/card";

const data = [
  {
    image:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    name: "Earthen Bottle",
    type: "$48",
  },
  {
    image:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    name: "Name 1",
    type: "Type 1",
  },
  {
    image:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    name: "Name 2",
    type: "Type 2",
  },
  {
    image:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    name: "Name 3",
    type: "Type 3",
  },
  {
    image:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    name: "Name 4",
    type: "Type 4",
  },
  {
    image:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg",
    name: "Name 5",
    type: "Type 5",
  },
];

export default function Home() {
  return (
    <div className="mt-4">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {data.map((e: ICard, i) => (
            <Card {...e} key={`keysnumber-${i.toString()}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
