import Button from "../components/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircleIcon from "@mui/icons-material/Circle";
import { useEffect, useRef, useState } from "react";

const imageURL = "/assets/HomePage";

const HomePage = () => {
  const [lineStart, setLineStart] = useState(0);
  const [lineEnd, setLineEnd] = useState(0);
  const currentWidth = window.innerWidth;
  let extraSubtract = 0;

  const updateLineHeight = () => {
    const firstElement = document.querySelector(".first-element");
    const lastElement = document.querySelector(".last-element");

    if (firstElement && lastElement) {
      const firstRect = firstElement.getBoundingClientRect();
      const lastRect = lastElement.getBoundingClientRect();

      // Recalculate line start (top of the first element) and line end (center of last CircleIcon)
      const newLineStart = window.scrollY + firstRect.top;
      const newLineEnd = window.scrollY + lastRect.top + lastRect.height / 2;

      setLineStart(newLineStart);
      setLineEnd(newLineEnd);
    }
  };

  if (currentWidth >= 640 && currentWidth <= 670) {
    extraSubtract = 95;
  } else if (currentWidth >= 670 && currentWidth <= 880) {
    extraSubtract = 90;
  } else if (currentWidth >= 880) {
    extraSubtract = 60;
  }

  useEffect(() => {
    // Initial calculation of the line height
    updateLineHeight();

    // Add an event listener for window resizing to recalculate the line height
    window.addEventListener("resize", updateLineHeight);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateLineHeight);
    };
  }, []);

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
        <h2 className="mb-8 text-3xl font-bold text-[#bc43df]">About us</h2>
        <p className="mx-[2vw] text-center text-lg md:mx-[10vw]">
          Welcome to HiveED, where education meets innovation in tech. With out
          passionate trainers and practical approach, we've committed to
          nurturing your skills and igniting you creativity. Join us as we
          redefine IT and electronics education, one student at a time.
          Together, let's pave the way for a brighter future in the tech
          industry.
        </p>
      </section>

      <section className="mb-24">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#bc43df]">
          Why HiveEd
        </h2>

        <div className="grid gap-6">
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-4 lg:gap-8">
            <div className="overflow-hidden rounded-xl bg-slate-50 px-4 py-4 drop-shadow-2xl sm:px-2 lg:px-4">
              <Button type="gray">Mentorship</Button>
              <p className="my-4 text-gray-600">
                Empowering tech talent through personalized mentorship.
              </p>
              <img
                src={`${imageURL}/mentorship.png`}
                alt="Mentorship"
                className="float-right"
              />
            </div>

            <div className="overflow-hidden rounded-xl bg-slate-50 px-4 py-4 drop-shadow-2xl sm:px-2 lg:px-4">
              <Button type="gray">Materials</Button>
              <p className="my-4 text-gray-600">
                Unlock your potential with engaging, industry-relevant
                materials.
              </p>
              <img
                src={`${imageURL}/materials.png`}
                alt="Mentorship"
                className="float-right"
              />
            </div>

            <div className="overflow-hidden rounded-xl bg-slate-50 px-4 py-4 drop-shadow-2xl sm:px-2 lg:px-4">
              <Button type="gray">Self Analysis test</Button>
              <p className="my-4 text-gray-600">
                Discover your strengths and chart your path with our free
                self-analysis test.
              </p>
              <img
                src={`${imageURL}/self_analysis_test.png`}
                alt="Mentorship"
                className="float-right"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 overflow-hidden rounded-xl bg-slate-50 py-4 drop-shadow-2xl xs:px-3 sm:py-16">
            <h1 className="text-5xl font-bold lg:mb-8 lg:text-6xl">100%</h1>
            <div className="flex flex-col gap-4 xs:flex-row xs:text-xs sm:text-lg">
              <Button type="gray">Active Interaction</Button>
              <Button type="gray">Placement Guidance</Button>
              <Button type="gray">Career Guidance</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="my-24">
        <h2 className="mb-8 text-3xl font-bold text-[#bc43df]">
          Couses we offer
        </h2>

        <div className="grid grid-cols-1 gap-8 xs:mx-[8vw] sm:mx-[6vw] sm:grid-cols-2 lg:mx-[12vw] xl:gap-x-16 xl:gap-y-0">
          {/* First Box (left) */}
          <div className="relative cursor-pointer overflow-hidden rounded-xl bg-slate-50 px-12 py-8 drop-shadow-2xl sm:col-start-1 sm:row-start-1">
            <img
              src={`${imageURL}/shapeA.png`}
              alt="Shape A Interview"
              className="absolute top-[-9vw] z-[-2]"
            />
            <img
              src={`${imageURL}/shapeB.png`}
              alt="Shape B Interview"
              className="absolute bottom-[-7vw] left-[-5vw] z-[-2]"
            />
            <img
              src={`${imageURL}/shapeC.png`}
              alt="Shape C Interview"
              className="absolute bottom-[-7vw] right-[-5vw] z-[-2]"
            />
            <h2 className="z-10 mb-24 text-lg font-medium md:mb-32">
              Complete interview <br /> prep pack
            </h2>
            <p className="inline">Explore</p>
            <ArrowForwardIcon className="float-right" />
          </div>

          {/* Second Box (right) */}
          <div className="relative cursor-pointer overflow-hidden rounded-xl bg-slate-50 px-12 py-8 drop-shadow-2xl sm:col-start-2 sm:row-start-2">
            <img src={`${imageURL}/ShapeA_.png`} alt="" />
            <h2 className="mb-24 text-lg font-medium md:mb-32">
              Paced interview <br />
              prep pack
            </h2>
            <p className="inline">Explore</p>
            <ArrowForwardIcon className="float-right" />
          </div>

          {/* Third Box (left) */}
          <div className="relative cursor-pointer overflow-hidden rounded-xl bg-slate-50 px-12 py-8 drop-shadow-2xl sm:col-start-1 sm:row-start-3">
            <img src={`${imageURL}/ShapeA_.png`} alt="" />
            <h2 className="mb-24 text-lg font-medium md:mb-32">
              Core crack <br /> pack
            </h2>
            <p className="inline">Explore</p>
            <ArrowForwardIcon className="float-right" />
          </div>

          {/* Fourth Box (right) */}
          <div className="relative cursor-pointer overflow-hidden rounded-xl bg-slate-50 px-12 py-8 drop-shadow-2xl sm:col-start-2 sm:row-start-4">
            <img src={`${imageURL}/ShapeA_.png`} alt="" />
            <h2 className="mb-24 text-lg font-medium md:mb-32">
              Individual <br /> courses
            </h2>
            <p className="inline">Explore</p>
            <ArrowForwardIcon className="float-right" />
          </div>
        </div>
      </section>

      <section className="relative">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#bc43df]">
          Our Teaching
        </h2>

        <div>
          <div className="relative hidden items-center justify-center sm:flex">
            <hr
              className="absolute top-0 w-[0.1rem] -translate-x-1/2 transform bg-gray-600"
              style={{ height: lineEnd - lineStart - extraSubtract }}
            />
          </div>

          <div className="grid gap-6 sm:mx-[12vw] sm:grid-cols-2 sm:gap-x-16 sm:gap-y-20">
            <LearningApproach
              TitleFirst="Interactive Class"
              ContentFirst="Engaging sessions that encourage active participation,"
              ContentSecond="discussions and collaborative learning."
              className="first-element sm:col-start-1 sm:row-start-1"
              RightSide={true}
              isFirst={true}
              setLineStart={setLineStart}
            />

            <LearningApproach
              TitleFirst="Enriched content &"
              TitleSecond="Notes"
              ContentFirst="Access to meticulously curated materials, including notes,"
              ContentSecond="resources and refrences to enhance learning."
              className="sm:col-start-2 sm:row-start-2"
              RightSide={false}
            />

            <LearningApproach
              TitleFirst="Real time example"
              ContentFirst="Application-oriented learning through relevant and timely"
              ContentSecond="instances from various industries or contexts."
              className="sm:col-start-1 sm:row-start-3"
              RightSide={true}
            />

            <LearningApproach
              TitleFirst="Mentor guidance"
              ContentFirst="Dedicated mentors providing personalized support,"
              ContentSecond="guidance, and assistance throughout the learning journey."
              className="flex gap-4 sm:col-start-2 sm:row-start-4"
              RightSide={false}
            />

            <LearningApproach
              TitleFirst="Assessment & Feedback"
              ContentFirst="Ongoing evaluation of progress and performance,coupled,"
              ContentSecond="with constructive feedback for improvement."
              className="last-element flex gap-4 sm:col-start-1 sm:row-start-5"
              RightSide={true}
              isLast={true}
              setLineEnd={setLineEnd}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

const LearningApproach = ({
  TitleFirst,
  TitleSecond,
  ContentFirst,
  ContentSecond,
  RightSide,
  className,
  isLast,
  isFirst,
  setLineStart,
  setLineEnd,
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (isFirst && elementRef.current) {
      // Set the starting point of the line to the top of the first element
      const rect = elementRef.current.getBoundingClientRect();
      setLineStart(window.scrollY + rect.top); // ScrollY accounts for document height
    }

    if (isLast && elementRef.current) {
      // Set the ending point of the line to the center of the CircleIcon in the last element
      const rect = elementRef.current.getBoundingClientRect();
      const circleCenter = window.scrollY + rect.top + rect.height / 2;
      setLineEnd(circleCenter); // Set the height until the center of CircleIcon}
    }
  }, [isLast, setLineStart, isFirst, setLineEnd]);

  return (
    <div ref={elementRef} className={`${className} flex gap-4`}>
      <div
        className={`${RightSide ? "inline sm:hidden" : "relative sm:absolute sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:transform"}`}
      >
        <CircleIcon className="text-[#eac0f5]" />
      </div>

      <div
        className={` ${RightSide ? "sm:text-right" : ""} relative flex flex-col gap-4 sm:w-full`}
      >
        {TitleSecond ? (
          <h3 className="text-lg font-medium">
            {TitleFirst} <br className="hidden sm:inline" /> {TitleSecond}
          </h3>
        ) : (
          <h3 className="text-lg font-medium">{TitleFirst}</h3>
        )}

        <p>
          {ContentFirst} <br className="hidden sm:inline" /> {ContentSecond}
        </p>
      </div>

      {RightSide && (
        <div className="hidden sm:absolute sm:left-[50%] sm:inline sm:translate-x-[-50%] sm:translate-y-[-50%] sm:transform">
          <CircleIcon className="text-[#eac0f5]" />
        </div>
      )}
    </div>
  );
};
