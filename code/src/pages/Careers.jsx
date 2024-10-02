import { RiArrowDropDownLine } from "react-icons/ri";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { RiArrowDropUpLine } from "react-icons/ri";
import { ErrorMessage, Formik } from "formik";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";
import { FormControl } from "@mui/material";

import SendEmail from "../api/SendEmail";
import { HeaderTwo, Paragraph } from "../components/GeneralComponents/Styles";
import { useState } from "react";
import SimpleDetailForm, {
  InputField,
} from "../components/GeneralComponents/SimpleDetailForm";

const initialValues = {
  name: "",
  email: "",
  number: "",
  resume: "",
  cv: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  number: Yup.string()
    .matches(/^\d{10}$/, "Mobile Number must be exactly 10 digits")
    .required("Mobile Number is required"),
  resume: Yup.mixed()
    .required("Resume is required")
    .test(
      "fileType",
      "Only PDF,PNG,JPG and JPEG formats are accepted",
      (value) => {
        return (
          value &&
          ["application/pdf", "image/png", "image/jpeg", "image/jpg"].includes(
            value.type,
          )
        );
      },
    )
    .test("fileSize", "File too large,max size is 50kb", (value) => {
      return value && value.size <= 51200;
    }),
  cv: Yup.string().required("Cover Letter is required"),
});

const templateID = "";

const Careers = () => {
  const [fileName, setFileName] = useState("");

  return (
    <>
      <section>
        <h1 className="mb-6 font-semibold text-[#bc43df] xs:text-lg md:text-xl xl:text-2xl">
          Join Our Team, <br /> Shape the Future.
        </h1>
        <Paragraph className="text-justify">
          Welcome to our Careers page! Here, you'll discover more than just job
          opportunities – you'll find a community of passionate individuals
          dedicated to making a difference. At HiveED, we believe that
          innovation thrives in an inclusive and diverse environment. Whether
          you're an experienced professional or just starting your career
          journey, we invite you to explore our openings and embark on a
          rewarding path with us. Join us in shaping the future and unleashing
          your potential.
        </Paragraph>
      </section>

      <hr className="my-12 border-gray-400 sm:my-16" />

      <section>
        <HeaderTwo titleFirst="Current hirings" className="mb-6 xl:text-3xl" />

        <div className="mx-[4vw] flex flex-col gap-6">
          <HiringSection
            title="Trainer"
            content="As a Trainer, you will be responsible for developing and delivering engaging training programs to enhance the skills and knowledge of students. You will need strong communication and presentation skills, along with the ability to motivate and inspire learners."
          />

          <HiringSection
            title="Subject Admin"
            content="The Subject Admin oversees the management and organization of course content within a specific subject area. This role includes coordinating curriculum development, maintaining up-to-date materials, and ensuring compliance with educational standards. The Subject Admin serves as a liaison between faculty and students, providing support and guidance to enhance the learning experience."
          />

          <HiringSection
            title="Open Position"
            content="Details for this position will be posted accordingly. Please check back for updates!."
          />
        </div>
      </section>

      <section className="my-20">
        <HeaderTwo titleFirst="Join us here" className="mb-8" />
        <Paragraph>Join Our Team of Inspiring Educators:</Paragraph>
        <Paragraph>Empower Minds, Shape Futures!</Paragraph>

        <div className="mx-[12vw] mt-6 overflow-hidden rounded-lg bg-slate-50 p-8 drop-shadow-2xl">
          <HeaderTwo titleFirst="Become a HiveEd Instructor" />
          <Paragraph className="mb-6 mt-2">
            Ignite your passion with a supportive community of instructors
            online.
          </Paragraph>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              const templateParams = {
                to_name: values.name,
                email: values.email,
                number: values.number,
                resume: values.resume,
                cv: values.cover,
              };
              SendEmail(
                resetForm,
                setSubmitting,
                templateID,
                templateParams,
                "Email sent successfully!",
              );
            }}
          >
            {({setFieldValue}) => (
              <SimpleDetailForm className="bg-transparent">
                <InputField type="text" labelName="Full Name" name="name" />
                <InputField type="email" labelName="Email" name="email" />
                <InputField
                  type="number"
                  max={10}
                  labelName="Contact Number"
                  name="number"
                />
                <FormControl fullWidth>
                  <div
                    name="resume"
                    className="flex flex-col items-start gap-3 sm:flex-row sm:items-center"
                  >
                    <label htmlFor="file-upload">
                      <input
                        type="file"
                        id="file-upload"
                        style={{ display: "none" }}
                        name="resume"
                        accept=".pdf,.png,.jpg,.jpeg"
                        onChange={(e) => {
                          const file = e.currentTarget.files[0];
                          setFileName(file ? file.name : "");
                          setFieldValue("resume", file);
                        }}
                      />
                      <button
                        className="rounded-lg bg-[#cf99de] p-2 text-xs xs:text-base"
                        type="button"
                        htmlFor="file-upload"
                        onClick={() =>
                          document.getElementById("file-upload").click()
                        }
                      >
                        Upload Resume
                      </button>
                    </label>
                    {fileName && <span>{fileName}</span>}
                  </div>
                  <div className="mt-1 text-start text-xs sm:text-sm">
                    (Min size: 50kb, if resume size is high try to upload image
                    of resume)
                  </div>
                  <ErrorMessage name="resume">
                    {(errorMessage) => (
                      <div className="text-start text-red-500">
                        {errorMessage}
                      </div>
                    )}
                  </ErrorMessage>
                </FormControl>
                <InputField labelName="Cover letter" name="cv" rows={5} />
                <div>
                  <button
                    type="submit"
                    className="rounded-lg bg-[#be34e5] px-10 py-3 text-white"
                  >
                    Submit
                  </button>
                </div>
              </SimpleDetailForm>
            )}
          </Formik>
        </div>
      </section>

      <ToastContainer />
    </>
  );
};

const HiringSection = ({ title, content }) => {
  const [isContentOpen, setIsContentOpen] = useState(false);
  // Split content by '.' and filter out any empty strings after trimming
  const sentences = content
    .split(".")
    .filter((sentence) => sentence.trim().length > 0);

  const arrowDropStyle = "h-7 w-7 cursor-pointer xs:h-9 xs:w-9 sm:h-11 sm:w-11";

  const handleContentClick = () => {
    setIsContentOpen((open) => !open);
  };

  return (
    <div>
      <div className="flex items-center justify-between overflow-hidden rounded-md bg-[#efe9f1] p-3 md:rounded-xl md:px-8">
        <h3 className="xs:text-xl">{title}</h3>
        <div>
          {isContentOpen ? (
            <RiArrowDropUpLine
              className={arrowDropStyle}
              onClick={handleContentClick}
            />
          ) : (
            <RiArrowDropDownLine
              className={arrowDropStyle}
              onClick={handleContentClick}
            />
          )}
        </div>
      </div>

      <div
        className={`flex-col gap-2 p-3 md:px-8 ${isContentOpen ? "flex" : "hidden"}`}
      >
        {sentences.map((sentence, index) => (
          <p
            key={index}
            className="flex text-xs xs:text-sm md:text-base lg:text-lg"
          >
            <FiberManualRecordIcon className="p-2" /> {sentence.trim() + "."}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Careers;
