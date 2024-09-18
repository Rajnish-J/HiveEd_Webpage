import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Careers = () => {
  return (
    <>
      <section>
        <h1 className="mb-6 font-semibold text-[#bc43df] xs:text-lg md:text-xl xl:text-2xl">
          Join Our Team, <br /> Shape the Future.
        </h1>
        <p className="text-justify text-sm xs:text-base md:text-lg">
          Welcome to our Careers page! Here, you'll discover more than just job
          opportunities – you'll find a community of passionate individuals
          dedicated to making a difference. At HiveED, we believe that
          innovation thrives in an inclusive and diverse environment. Whether
          you're an experienced professional or just starting your career
          journey, we invite you to explore our openings and embark on a
          rewarding path with us. Join us in shaping the future and unleashing
          your potential.
        </p>
      </section>

      <hr className="my-12 border-gray-400 sm:my-16" />

      <section>
        <h1 className="mb-6 font-semibold text-[#bc43df] xs:text-lg md:text-xl xl:text-3xl">
          Current hirings
        </h1>

        <div className="mx-[4vw] flex flex-col gap-6">
          <div className="flex items-center justify-between overflow-hidden rounded-xl bg-[#fbf4fd] px-4 py-4 md:px-8">
            <h3 className="xs:text-xl">Trainer</h3>
            <div className="h-6 w-6 cursor-pointer xs:h-8 xs:w-8 lg:h-10 lg:w-10">
              <KeyboardArrowDownIcon sx={{ width: "100%", height: "100%" }} />
            </div>
          </div>

          <div className="flex items-center justify-between overflow-hidden rounded-xl bg-[#fbf4fd] px-4 py-4 md:px-8">
            <h3 className="xs:text-xl">Subject Admin</h3>
            <div className="h-6 w-6 cursor-pointer xs:h-8 xs:w-8 lg:h-10 lg:w-10">
              <KeyboardArrowDownIcon sx={{ width: "100%", height: "100%" }} />
            </div>
          </div>

          <div className="flex items-center justify-between overflow-hidden rounded-xl bg-[#fbf4fd] px-4 py-4 md:px-8">
            <h3 className="xs:text-xl">Open Position</h3>
            <div className="h-6 w-6 cursor-pointer xs:h-8 xs:w-8 lg:h-10 lg:w-10">
              <KeyboardArrowDownIcon sx={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
