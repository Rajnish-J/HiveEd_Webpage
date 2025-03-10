import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircleIcon from "@mui/icons-material/Circle";

import Button from "../GeneralComponents/Button";
import { HeaderTwo, Image, Paragraph } from "../GeneralComponents/Styles";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ImageStyle =
  "group absolute z-[-2] h-[50%] w-[50%] transition-all duration-500 group-hover:h-full group-hover:w-full lg:h-[50%] lg:w-[40%] ";

export const LearningDetails = ({ title, content, src }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-slate-50 p-4 drop-shadow-2xl sm:p-6">
      <Button type="gray">{title}</Button>
      <Paragraph className="my-4 text-gray-600">{content}</Paragraph>
      <Image src={`HomePage/${src}`} alt={title} className="float-right" />
    </div>
  );
};

export const CoursesLists = ({
  FirstContent,
  SecondContent,
  divClass,
  Image1Class,
  Image2Class,
  Image3Class,
  targetId,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses#${targetId}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative cursor-pointer overflow-hidden rounded-xl bg-slate-50 px-12 py-8 drop-shadow-2xl ${divClass}`}
    >
      <Image
        src={`HomePage/shapeA.png`}
        alt={`Shape A ${FirstContent}`}
        className={`${ImageStyle} group-hover:left-0 group-hover:top-0 ${Image1Class}`}
      />
      <Image
        src={`HomePage/shapeB.png`}
        alt={`Shape B ${FirstContent}`}
        className={`${ImageStyle} group-hover:bottom-0 group-hover:left-0 ${Image2Class}`}
      />
      <Image
        src={`HomePage/shapeC.png`}
        alt={`Shape C ${FirstContent}`}
        className={`${ImageStyle} group-hover:bottom-0 group-hover:right-0 ${Image3Class}`}
      />
      <HeaderTwo
        titleFirst={FirstContent}
        titleSecond={SecondContent}
        className="z-10 mb-24 md:mb-32"
      />
      {/* <h2 className="z-10 mb-24 text-lg font-medium md:mb-32">
        {FirstContent} <br /> {SecondContent}
      </h2> */}
      <p className="inline">Explore</p>
      <ArrowForwardIcon className="float-right" />

      {/* Optional Background Color Overlay */}
      <div className="absolute inset-0 z-[-1] bg-[#eadaca] opacity-0 transition-opacity duration-500 group-hover:opacity-80" />
    </div>
  );
};

export const LearningApproach = ({
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
    <div
      ref={elementRef}
      className={`${className} group flex items-start justify-center gap-4`}
    >
      <div
        className={`${RightSide ? "inline sm:hidden" : "relative sm:absolute sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:transform"}`}
      >
        <CircleIcon className="text-[#eac0f5] transition-transform duration-300 ease-in-out group-hover:scale-110" />
      </div>

      <div
        className={` ${RightSide ? "sm:text-right" : ""} relative flex flex-col gap-4 sm:w-full`}
      >
        {TitleSecond ? (
          <h3 className="text-xl hover:text-2xl font-medium transition-transform duration-300 ease-in-out group-hover:scale-110">
            {TitleFirst} <br className="hidden sm:inline" /> {TitleSecond}
          </h3>
        ) : (
          <h3 className="text-xl hover:text-2xl font-medium transition-transform duration-300 ease-in-out group-hover:scale-110">
            {TitleFirst}
          </h3>
        )}

        <Paragraph className="transition-transform duration-300 ease-in-out group-hover:scale-110">
          {ContentFirst} <br className="hidden sm:inline" /> {ContentSecond}
        </Paragraph>
      </div>

      {RightSide && (
        <div className="hidden sm:absolute sm:left-[50%] sm:inline sm:translate-x-[-50%] sm:translate-y-[-50%] sm:transform">
          <CircleIcon className="text-[#eac0f5] transition-transform duration-300 ease-in-out group-hover:scale-110" />
        </div>
      )}
    </div>
  );
};

export const TeachingSection = ({
  lineStart,
  lineEnd,
  extraSubtract,
  setLineStart,
  setLineEnd,
}) => {
  return (
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
  );
};
