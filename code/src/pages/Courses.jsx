import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Formik } from "formik";

import Button from "../components/GeneralComponents/Button";
import { HeaderTwo, Paragraph } from "../components/GeneralComponents/Styles";
import SimpleDetailForm, {
  InputField,
} from "../components/GeneralComponents/SimpleDetailForm";
import * as Yup from "yup";
import {
  CompleteIntPack,
  PacedIntPack,
  CoreCrackPack,
  IndividualPack,
} from "../constants/CoursesData";
import SendEmail from "../api/SendEmail";

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Full Name is required"),
  number: Yup.number().required("Mobile Number is required"),
  message: Yup.string().required("Message is required"),
});

const templateID = "";

const Courses = () => {
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
          />

          <CoursesList
            title="Paced Interview Preparation"
            duration={2.5}
            list={PacedIntPack}
          />

          <CoursesList
            title="Core Crack Pack"
            duration={2.5}
            list={CoreCrackPack}
          />

          <CoursesList
            title="Individual Courses"
            duration={1.5}
            list={IndividualPack}
          />
        </div>
      </section>

      <hr className="my-12 border-gray-400 sm:my-16" />

      <Formik
        initialValues={{ name: "", number: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          const templateParams = {
            to_name: values.name,
            number: values.number,
            message: values.message,
          };
          SendEmail(
            resetForm,
            setSubmitting,
            templateID,
            templateParams,
            "Message sent successfully!",
          );
        }}
      >
        {() => (
          <SimpleDetailForm
            className="grid grid-cols-1 gap-y-6 p-6 md:grid-cols-[auto,auto] md:gap-x-6 md:gap-y-0 md:p-10"
            title1="Apply or enquire"
            title2="about courses"
            description1="Feel free to reach out, we'd love to hear from you"
          >
            <InputField type="text" labelName="Full Name" name="name" />
            <InputField
              type="number"
              max={10}
              labelName="Mobile Number"
              name="number"
            />
            <InputField labelName="Description" name="description" rows={5} />
            <div>
              <Button type="primary">Send</Button>
            </div>
          </SimpleDetailForm>
        )}
      </Formik>
    </>
  );
};

const CoursesList = ({ title, duration, list }) => {
  return (
    <div className="mb-16 grid place-content-center overflow-hidden rounded-xl bg-white px-2 py-6 drop-shadow-2xl sm:grid-cols-[auto,auto,auto] md:px-6 md:py-8">
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
