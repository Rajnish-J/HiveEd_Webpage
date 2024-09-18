import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const CoursesList = [
  { id: 1, text: "Explore HiveEd" },
  { id: 2, text: "Pricing" },
  // { id: 3, text: "Career Guidance" },
];

const FeaturesList = [
  // { id: 1, text: "Course Analytics" },
  // { id: 2, text: "Platinum Certification Standard" },
  // { id: 3, text: "Self Analysis Test" },
  { id: 4, text: "Commuity Engagement" },
  { id: 5, text: "Subscription" },
];

const ResourcesList = [
  { id: 1, text: "Blog" },
  // { id: 2, text: "Case Studies" },
  { id: 3, text: "Help" },
];

const CompanyList = [
  { id: 1, text: "About" },
  { id: 2, text: "Careers" },
];

const Footer = () => {
  return (
    <div className="xs:text-sm overflow-hidden border-t-2 border-[#a93fc4] bg-[#f3dbf9] p-6 text-xs lg:px-20 lg:py-8 lg:text-base xl:py-12 xl:text-lg">
      <div className="grid grid-cols-3 gap-x-6 sm:grid-cols-5">
        {/* Logo and Social Links */}
        <div className="flex flex-col gap-12 sm:justify-between">
          <img src="/assets/logo.png" alt="HiveEd Logo" className="w-24" />

          <div className="">
            <h3 className="xs:text-lg mb-3 text-sm text-[#e836ffb4] xl:text-2xl">
              Follow us
            </h3>

            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/social.hiveed/"
                target="_blank"
                className="cursor-pointer hover:text-pink-400"
              >
                <div className="xs:h-6 xs:w-6 h-4 w-4 xl:h-8 xl:w-8">
                  <InstagramIcon style={{ width: "100%", height: "100%" }} />
                </div>
              </a>
              <a
                href="http://www.linkedin.com/in/hiveed-social"
                target="_blank"
                className="cursor-pointer hover:text-pink-400"
              >
                <div className="xs:h-6 xs:w-6 h-4 w-4 xl:h-8 xl:w-8">
                  <LinkedInIcon style={{ width: "100%", height: "100%" }} />
                </div>
              </a>
              <a
                href="https://youtube.com/@HiveEd-yz2ol?si=gAmQ5x5QzkIm6GMk"
                target="_blank"
                className="cursor-pointer hover:text-pink-400"
              >
                <div className="xs:h-6 xs:w-6 h-6 w-6 xl:h-8 xl:w-8">
                  <YouTubeIcon style={{ width: "100%", height: "100%" }} />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Courses */}
        <FooterList title="Courses" list={CoursesList} />

        {/* Features */}
        <FooterList title="Features" list={FeaturesList} />

        {/* Resources */}
        <FooterList title="Resources" list={ResourcesList} />

        {/* Company */}
        <FooterList title="Company" list={CompanyList} />
      </div>

      {/* Copyright information */}
      <hr className="mx-20 mt-8 border-white" />
      <p className="pt-3 text-center text-gray-500 lg:text-base">
        @2024 All rights reserved
      </p>
    </div>
  );
};

export default Footer;

const FooterList = ({ title, list }) => {
  return (
    <ul className="flex flex-col gap-3">
      <h3 className="font-bold">{title}</h3>

      {list.map((item) => (
        <li
          key={item.text}
          className="cursor-pointer hover:pl-4 hover:text-red-500"
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};
