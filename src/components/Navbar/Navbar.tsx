import TopSection from "./TopSection";

const Navbar = () => {
  return (
    <>
      <header>
        {/* TOP SECTION */}
        <TopSection />

        {/* BOTTOM SECTION */}
        <section className="flex justify-between"></section>
      </header>
    </>
  );
};

export default Navbar;
