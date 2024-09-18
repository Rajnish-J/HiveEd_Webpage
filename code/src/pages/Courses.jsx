import Button from "../components/Button";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const CompleteIntPack = [
  { id: 1, text: "Java or Python or C Language" },
  { id: 2, text: "SQL" },
  { id: 3, text: "Aptitude" },
  { id: 4, text: "Resume preparation" },
  { id: 5, text: "Personal skill development" },
  { id: 6, text: "Attire tips" },
];

const PacedIntPack = [
  { id: 1, text: "Java or Python" },
  { id: 2, text: "SQL" },
  { id: 3, text: "Resume preparation" },
  { id: 4, text: "Personal skill development" },
  { id: 5, text: "Attire tips" },
];

const CoreCrackPack = [
  { id: 1, text: "Electronic devices" },
  { id: 2, text: "Networks" },
  { id: 3, text: "Analog and Digital circuits" },
  { id: 4, text: "Signals and systems" },
  { id: 5, text: "Digital Communication" },
  { id: 6, text: "Control systems" },
  // { id: 5, text: "Communication and control systems" },
  { id: 7, text: "Electromagnetics" },
];

const IndividualPack = [
  { id: 1, text: "Java" },
  { id: 2, text: "Python" },
  { id: 3, text: "C Language" },
  { id: 4, text: "SQL" },
  { id: 5, text: "Aptitude" },
  { id: 6, text: "Electronics" },
  { id: 7, text: "Communication systems" },
];

const Courses = () => {
  return (
    <>
      <section>
        <h1 className="mb-6 font-semibold text-[#bc43df] xs:text-lg md:text-xl xl:text-2xl">
          Unlock Your Potential with Out <br /> Comprehensive Course Offerings
        </h1>
        <p className="text-justify text-sm xs:text-base md:text-lg">
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
        </p>
      </section>

      <hr className="my-12 border-gray-400 sm:my-16" />

      <section>
        <h1 className="mb-12 font-semibold text-[#bc43df] xs:text-lg md:text-xl xl:text-3xl">
          Courses we offer
        </h1>

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
    </>
  );
};

const CoursesList = ({ title, duration, list }) => {
  return (
    <div className="mb-16 grid place-content-center overflow-hidden rounded-xl bg-white px-2 py-6 drop-shadow-2xl sm:grid-cols-[auto,auto,auto] md:px-6 md:py-8">
      <div className="text-center md:text-start">
        {/* First Container */}
        <h1 className="mb-4 text-lg font-medium text-[#bc43df] sm:mb-6 lg:text-xl xl:mb-8">
          {title}
        </h1>
        <Button type="secondary">Online Live Class</Button>
        <h4 className="my-4 sm:my-6 lg:text-lg xl:my-8">
          {duration} Months <FiberManualRecordIcon className="p-2" /> Weekdays
          <span className="ml-1 text-sm lg:text-base">(Evening)</span>
        </h4>
        <Button type="primary">Enquire now</Button>
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
