const PopularLocation = () => {
  return (
    <section className="">
      <header className="pb-2">
        <h2 className="font-medium text-lg">Popular locations**</h2>
        <p className="text-sm">
          with 2 bed apartments in Jumeirah Village Circle (JVC)
        </p>
      </header>
      <div className="grid grid-cols-3 gap-1  sm:gap-4">
        <p> </p>
        <p className="text-xs text-center">Avg. annual rent/sqft </p>
        <p className="text-xs ">VS Q4 2023</p>

        <p className="whitespace-nowrap">1 JVC District 13 </p>
        <p className="text-center">85</p>
        <p>
          <span className="text-green-400 text-xl">&#9650; </span>7.3%
        </p>

        <p className="whitespace-nowrap">2 JVC District 15 </p>
        <p className="text-center">88</p>
        <p>
          <span className="text-green-400 text-xl">&#9650; </span>5.2%
        </p>

        <p className="whitespace-nowrap">3 JVC District 12 </p>
        <p className="text-center">80</p>
        <p>
          <span className="text-green-400 text-xl">&#9650; </span>12.6%
        </p>

        <p className="whitespace-nowrap">4 JVC District 10 </p>
        <p className="text-center">78</p>
        <p>
          <span className="text-red-400 text-xl">&#9660; </span>-2.1%
        </p>

        <p className="whitespace-nowrap">5 JVC District 14 </p>
        <p className="text-center">99</p>
        <p>
          <span className="text-green-400 text-xl">&#9650;</span> 13.2%
        </p>
      </div>
    </section>
  );
};

export default PopularLocation;
