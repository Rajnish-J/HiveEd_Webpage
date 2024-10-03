import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ToastContainer } from "react-toastify";

import Button from "../components/GeneralComponents/Button";
import { HeaderTwo, Paragraph } from "../components/GeneralComponents/Styles";
import * as Yup from "yup";
import {
  CompleteIntPack,
  PacedIntPack,
  CoreCrackPack,
  IndividualPack,
} from "../constants/CoursesData";
import GeneralFormField from "../components/GeneralComponents/GeneralFormField";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Full Name is required"),
  number: Yup.string()
    .matches(/^\d{10}$/, "Mobile Number must be exactly 10 digits")
    .required("Mobile Number is required"),
  message: Yup.string().required("Message is required"),
});

const templateID = "";

const Courses = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTarget = () => {
      // Check if there's a hash in the URL
      if (location.hash) {
        // Get the target element based on the hash
        const targetElement = document.getElementById(
          location.hash.substring(1),
        );

        // Calculate the header height: 3vh + 60px for padding
        const headerHeight = window.innerHeight * 0.03 + 80;

        // Ensure the target element exists
        if (targetElement) {
          // Get the top position of the target element relative to the document
          const yPosition =
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

          // Scroll to the calculated position
          window.scrollTo({ top: yPosition, behavior: "smooth" });
        } else {
          console.warn(
            `Element with ID "${location.hash.substring(1)}" not found.`,
          );
        }
      }
    };

    // Run the scrollToTarget function
    scrollToTarget();
  }, [location]);

  return (
    <>
      <section>
        <h1 className="mb-6 font-semibold text-[#bc43df] xs:text-lg md:text-xl xl:text-2xl">
          Unlock Your Potential with Out <br /> Comprehensive Course Offerings
        </h1>
        <Paragraph className="text-justify">
          Welcome to HiveED! Here, we offer a diverse range of courses designed
          to empower individuals like you to unlock their full potential and
          thrive in today's dynamic world. Our courses cover a wide spectrum of
          skills, catering to various interests and career paths. Whether you're
          looking to enhance your technical proficiency, or acquire new creative
          skills, we have something for everyone. With expert-led instruction,
          hands-on projects, and interactive learning experiences, our platform
          is your gateway to personal and professional growth. Explore our
          courses and embark on a journey of continuous learning and skill
          mastery.
        </Paragraph>
      </section>

      <hr className="my-12 border-gray-400 sm:my-16" />

      <section>
        <HeaderTwo titleFirst="Courses we offer" className="mb-12" />

        <div className="mx-4 sm:mx-8 lg:mx-24 xl:mx-[14vw]">
          <CoursesList
            title="Complete Interview Preparation"
            duration={3}
            list={CompleteIntPack}
            id="complete-interview"
          />

          <CoursesList
            title="Paced Interview Preparation"
            duration={2.5}
            list={PacedIntPack}
            id="paced-interview"
          />

          <CoursesList
            title="Core Crack Pack"
            duration={2.5}
            list={CoreCrackPack}
            id="core-crack"
          />

          <CoursesList
            title="Individual Courses"
            duration={1.5}
            list={IndividualPack}
            id="individual-courses"
          />
        </div>
      </section>

      <hr className="my-12 border-gray-400 sm:my-16" />

      <GeneralFormField
        initialValues={{ name: "", number: "", message: "" }}
        type="number"
        validationSchema={validationSchema}
        labelName="Mobile Number"
        title1="Apply or enquire"
        title2="about courses"
        description1="Feel free to reach out, we'd love to hear from you"
        description2=""
      />

      <ToastContainer />
    </>
  );
};

const CoursesList = ({ title, duration, list, id }) => {
  return (
    <div
      id={id}
      className="mb-16 grid place-content-center overflow-hidden rounded-xl bg-white px-2 py-6 drop-shadow-2xl sm:grid-cols-[auto,auto,auto] md:px-6 md:py-8"
    >
      <div className="text-center md:text-start">
        {/* First Container */}
        <HeaderTwo className="mb-4 sm:mb-6 xl:mb-8" titleFirst={title} />
        <Button type="secondary">Online Live Class</Button>
        <h4 className="my-4 sm:my-6 lg:text-lg xl:my-8">
          {duration} Months <FiberManualRecordIcon className="p-2" /> Weekdays
          <span className="ml-1 text-sm lg:text-base">(Evening)</span>
        </h4>
        <a
          href="https://forms.gle/rX8eaYsrALQrdGFi7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button type="primary" hover="hover">
            Register now
          </Button>
        </a>
      </div>

      {/* Center Divider */}
      {/* For small screens */}
      <hr className="mx-4 my-8 border-[#999] xs:mx-0 sm:hidden" />
      {/* At above 640 px */}
      <div className="flex items-center justify-center">
        <hr className="mx-8 hidden h-[30vh] w-[0.1rem] bg-[#999] sm:inline lg:mx-12" />
      </div>

      {/* Second Container */}
      <ul className="flex flex-col items-start justify-center gap-2 sm:text-start 2xl:text-lg">
        {list.map((item) => (
          <li key={item.id}>
            <CheckCircleOutlineIcon className="mr-2 text-green-300" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
