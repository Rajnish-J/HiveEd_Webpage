import Button from "../components/Button";

const imageURL = "/assets/HomePage";

const HomePage = () => {
  return (
    <>
      <section className="grid grid-cols-[auto,auto] place-content-center place-items-center gap-8 sm:grid-cols-[auto,auto,auto] lg:gap-16">
        <div>
          <h1 className="text-3xl font-medium">
            Acquire, Learn, <br /> Expertise
          </h1>
          <p className="my-6 text-justify lg:text-lg">
            Stay informed, inspired, and empowered as you expand your knowledge,
            acquire new skills, and master expertise through our dynamic skill
            development platform.
          </p>
          <Button type="primary">Explore More</Button>
        </div>

        <img src={`${imageURL}/hiveed_symbol.png`} alt="HiveEd symbol" />

        <img
          src={`${imageURL}/Student.png`}
          alt="Student"
          className="hidden sm:inline"
        />
      </section>

      <section className="relative my-24 flex h-[100%] w-[100%] flex-col items-center justify-center overflow-hidden">
        <img
          src="/assets/Aboutus/background_aboutus.png"
          alt="Background"
          className="absolute top-0 h-[100%] w-[100%]"
        />
        <h1 className="mb-8 text-3xl font-bold text-[#bc43df]">About us</h1>
        <p className="mx-[2vw] text-center text-lg md:mx-[10vw]">
          Welcome to HiveED, where education meets innovation in tech. With out
          passionate trainers and practical approach, we've committed to
          nurturing your skills and igniting you creativity. Join us as we
          redefine IT and electronics education, one student at a time.
          Together, let's pave the way for a brighter future in the tech
          industry.
        </p>
      </section>
    </>
  );
};

export default HomePage;
