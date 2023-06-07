import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 border-b-2"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <div className="h-8 w-auto">
              <Image
                src="/images/pokemon.png"
                width={100}
                height={24}
                alt="logo"
              />
            </div>
          </a>
        </div>

        <div className="justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Catched list <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
