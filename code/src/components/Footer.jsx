import { Link } from "react-router-dom";

const CoursesList = [
  { id: 1, text: "Explore HiveEd" },
  // { id: 2, text: "Pricing" },
  // { id: 3, text: "Career Guidance" },
];

// const FeaturesList = [
//   // { id: 1, text: "Course Analytics" },
//   // { id: 2, text: "Platinum Certification Standard" },
//   // { id: 3, text: "Self Analysis Test" },
//   { id: 4, text: "Community Engagement" },
//   { id: 5, text: "Subscription" },
// ];

const ResourcesList = [
  { id: 1, to: "/blog", text: "Blog" },
  // { id: 2, text: "Case Studies" },
  { id: 3, text: "Help" },
];

const CompanyList = [
  { id: 1, to: "/about-us", text: "About" },
  { id: 2, to: "/careers", text: "Careers" },
];

const Footer = () => {
  return (
    <div className="overflow-hidden border-t-2 border-[#a93fc4] bg-[#f3dbf9] p-6 text-xs xs:text-sm lg:px-20 lg:py-8 lg:text-base xl:py-12 xl:text-lg">
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 xs:grid-cols-3 sm:grid-cols-4">
        {/* Logo and Social Links */}
        <div className="flex flex-col gap-12 sm:justify-between">
          <img src="/assets/logo.png" alt="HiveEd Logo" className="w-24" />

          <div>
            <h3 className="mb-3 text-sm text-[#830095b4] xs:text-lg xl:text-2xl">
              Follow us
            </h3>

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <div className="h-4 xs:h-6 md:h-8">
                    <img
                      src={social.src}
                      alt={social.alt}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Courses */}
        <FooterList title="Courses" list={CoursesList} />

        {/* Features */}
        {/* <FooterList title="Features" list={FeaturesList} /> */}

        {/* Resources */}
        <FooterList title="Resources" list={ResourcesList} />

        {/* Company */}
        <FooterList
          title="Company"
          list={CompanyList}
          className="xs:col-start-2 sm:col-start-4"
        />
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

// Component for rendering footer list
const FooterList = ({ title, list, className }) => {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      <h3 className="font-bold">{title}</h3>

      {list.map((item) => (
        <li
          key={item.id}
          className="cursor-pointer hover:pl-4 hover:text-red-500"
        >
          {item.to ? (
            <Link to={item.to}>{item.text}</Link>
          ) : (
            <span>{item.text}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

// Social links as reusable data
const socialLinks = [
  {
    href: "https://www.instagram.com/social.hiveed/",
    src: "/assets/Footer/instagram.png",
    alt: "Instagram",
  },
  {
    href: "http://www.linkedin.com/in/hiveed-social",
    src: "/assets/Footer/linkedin.png",
    alt: "Linkedin",
  },
  {
    href: "https://youtube.com/@HiveEd-yz2ol?si=gAmQ5x5QzkIm6GMk",
    src: "/assets/Footer/youtube.png",
    alt: "youTube",
  },
];
