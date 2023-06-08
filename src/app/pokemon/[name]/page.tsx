"use client";

type IDetailPage = {
  params: {
    name: string;
  };
};

export default function DetailPage({ params }: IDetailPage) {
  console.log("lalalal", params);
  return (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container px-5 py-6 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg"
            width={300}
            height={300}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0 lg:px-3">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Beedril
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span className="text-gray-600">Type: Bug, Poison</span>
              </span>
            </div>
            <p className="leading-relaxed">
              Stats: hp, attack, defense, special-attack, special-defense, speed
            </p>
            <p className="leading-relaxed">
              Abilities: swarm, sniper Some Moves: swords-dance, cut, headbutt,
              fury-attack, take-down
            </p>

            <div className="flex">
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Catch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
