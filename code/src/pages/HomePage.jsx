import { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";

import Button from "../components/GeneralComponents/Button";
import {
  HeaderTwo,
  Image,
  Paragraph,
} from "../components/GeneralComponents/Styles";
import {
  LearningDetails,
  CoursesLists,
  TeachingSection,
} from "../components/PageComponents/HomeSubComponents";
import GeneralFormField from "../components/GeneralComponents/GeneralFormField";
import { useLocation } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const HomePage = () => {
  const location = useLocation();
  const scrollToForm = location.state?.scrollToForm || false;

  const [lineStart, setLineStart] = useState(0);
  const [lineEnd, setLineEnd] = useState(0);
  const currentWidth = window.innerWidth;
  let extraSubtract = currentWidth >= 880 ? 70 : currentWidth >= 670 ? 80 : 95;

  const updateLineHeight = () => {
    const firstElement = document.querySelector(".first-element");
    const lastElement = document.querySelector(".last-element");

    if (firstElement && lastElement) {
      const firstRect = firstElement.getBoundingClientRect();
      const lastRect = lastElement.getBoundingClientRect();

      // Recalculate line start (top of the first element) and line end (center of last CircleIcon)
      setLineStart(window.scrollY + firstRect.top);
      setLineEnd(window.scrollY + lastRect.top + lastRect.height / 2);
    }
  };

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
      <section className="grid grid-cols-2 place-items-center gap-4 sm:grid-cols-[auto,auto,auto] sm:gap-x-6 lg:gap-x-16">
        <div className="col-span-2 sm:col-span-1">
          <h1 className="text-xl font-medium xs:text-3xl">
            Acquire, Learn, <br /> Expertise
          </h1>
          <Paragraph className="my-2 text-justify xs:my-5">
            Stay informed, inspired, and empowered as you expand your knowledge,
            acquire new skills, and master expertise through our dynamic skill
            development platform.
          </Paragraph>
          <Button type="primary" hover="hover" to="/courses">
            Explore More
          </Button>
        </div>

        <div className="w-20 xs:w-28 sm:w-36">
          <Image
            src="HomePage/hiveed_symbol.png"
            alt="HiveEd symbol"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="w-20 xs:w-36 sm:w-44 md:w-full">
          <Image
            src="HomePage/Student.png"
            alt="Student"
            className="h-full w-full object-contain"
          />
        </div>
      </section>

      <section className="relative my-16 overflow-hidden">
        <Image
          src="Aboutus/background_aboutus.png"
          alt="background"
          className="absolute top-0 z-[-1] h-[100%] w-[100%]"
        />

        <HeaderTwo titleFirst="About us" className="mb-8 text-center" />
        <Paragraph className="mx-[2vw] text-center md:mx-[10vw]">
          Welcome to HiveED, where education meets innovation in tech. With out
          passionate trainers and practical approach, we've committed to
          nurturing your skills and igniting you creativity. Join us as we
          redefine IT and electronics education, one student at a time.
          Together, let's pave the way for a brighter future in the tech
          industry.
        </Paragraph>
      </section>

      <section>
        <HeaderTwo titleFirst="Why HiveED" className="mb-8 text-center" />

        <div className="grid gap-6">
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-0">
            <LearningDetails
              title="Mentorship"
              content="Empowering tech talent through personalized mentorship."
              src="mentorship.png"
            />
            <LearningDetails
              title="Materials"
              content="Unlock your potential with engaging, industry-relevant materials."
              src="materials.png"
            />
          </div>

          <div className="flex flex-col items-center justify-between gap-8 overflow-hidden rounded-xl bg-slate-50 py-4 drop-shadow-xl xs:py-3 sm:py-16">
            <h2 className="text-5xl font-bold lg:mb-8 lg:text-7xl">100%</h2>
            <div className="flex flex-col items-center gap-6 xs:flex-row">
              <Button type="gray">Active Interaction</Button>
              <div className="hidden xs:inline">
                <FiberManualRecordIcon className="p-1.5 text-gray-500" />
              </div>
              <Button type="gray">Placement Guidance</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="my-24">
        <HeaderTwo titleFirst="Courses we offer" className="mb-8 text-center" />

        <div className="gird-cols-1 grid gap-8 xs:mx-[8vw] sm:mx-[6vw] sm:grid-cols-2 lg:mx-[12vw] xl:gap-x-16 xl:gap-y-0">
          <CoursesLists
            FirstContent="Complete interview"
            SecondContent="prep pack"
            divClass="sm:col-start-1 sm:row-start-1"
            Image1Class="top-[-20%]"
            Image2Class="bottom-[-20%] left-[-10%]"
            Image3Class="bottom-[-20%] right-[-10%]"
            targetId="complete-interview"
          />

          <CoursesLists
            FirstContent="Paced interview"
            SecondContent="prep pack"
            divClass="sm:col-start-2 sm:row-start-2"
            Image1Class="top-[-25%] left-[-10%] "
            Image2Class="bottom-[-45%] rotate-[-65deg] "
            Image3Class=" right-[-30%] "
            targetId="paced-interview"
          />

          <CoursesLists
            FirstContent="Core crack"
            SecondContent="pack"
            divClass="sm:col-start-1 sm:row-start-3"
            Image1Class="bottom-[-25%] right-[-2%]  rotate-180"
            Image2Class="top-[-25%] right-[-15%]"
            Image3Class="rotate-[-30deg] top-[-15%] left-[-10%]"
            targetId="core-crack"
          />

          <CoursesLists
            FirstContent="Individual"
            SecondContent="Courses"
            divClass="sm:col-start-2 sm:row-start-4"
            Image1Class="right-[8%] rotate-[50deg] top-[-27%]"
            Image2Class="left-[-20%] top-[30%] rotate-[30deg]"
            Image3Class="bottom-[-27%] right-[12%] rotate-[40deg]"
            targetId="individual-courses"
          />
        </div>
      </section>

      <section>
        <HeaderTwo className="mb-8 text-center" titleFirst="Our Teaching" />

        <TeachingSection
          lineStart={lineStart}
          lineEnd={lineEnd}
          extraSubtract={extraSubtract}
          setLineStart={setLineStart}
          setLineEnd={setLineEnd}
        />
      </section>

      <section className="my-20" id="form-section">
        <GeneralFormField
          type="email"
          validationSchema={validationSchema}
          labelName="Email"
          title1="Let's"
          title2="Connect"
          description1="Questions,comments or requests?"
          description2="Feel free to reach out, we'd love to hear from you"
          scrollToForm={scrollToForm}
        />
      </section>

      <ToastContainer />
    </>
  );
};

export default HomePage;
