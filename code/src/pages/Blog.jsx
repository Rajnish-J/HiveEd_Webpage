import Button from "../components/GeneralComponents/Button";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  HeaderTwo,
  Image,
  Paragraph,
} from "../components/GeneralComponents/Styles";

const Blog = () => {
  return (
    <>
      {/* Blog Introduction */}
      <section className="flex flex-col gap-6">
        <h1 className="font-semibold text-[#bc43df] xs:text-lg md:text-xl xl:text-2xl">
          Unlock Your Potential with Out <br /> Comprehensive Course Offerings
        </h1>
        <Paragraph className="text-justify">
          Adaptation to Industry Trends: Hive.ed stays current with industry
          trends and emerging domains. Regularly update course offerings to
          reflect the evolving needs of learners and the job market.
        </Paragraph>
        <Paragraph className="text-justify">
          Global Recognition: Hive.ed aims for global recognition and brand
          certification. All courses are designed to meet international
          standards and provide learners with credentials that hold value
          worldwide.
        </Paragraph>
      </section>

      {/* Divider */}
      <hr className="my-12 border-gray-400 sm:my-16" />

      {/* Latest Updates */}
      <section>
        <HeaderTwo titleFirst="Latest Updates" className="mb-8" />

        <div className="mx-[6vw] flex flex-col gap-y-16 xs:mx-[10vw] sm:gap-y-20 md:mx-[12vw] md:gap-y-28 lg:mx-[16vw]">
          {/* Youtube Video */}
          <div className="grid grid-cols-1 gap-y-8 overflow-hidden rounded-xl bg-slate-50 p-4 drop-shadow-2xl sm:grid-cols-[auto,auto] sm:gap-x-8 sm:gap-y-0 sm:p-8 lg:gap-x-0">
            <div className="text-center sm:text-start">
              <HeaderTwo
                titleFirst="Youtube Video"
                className="mb-4 sm:mb-6 xl:mb-8"
              />
              <Button type="secondary">Online Class</Button>
              <Paragraph className="my-4 sm:my-6 xl:my-8">
                Every <FiberManualRecordIcon className="p-2" /> Week
              </Paragraph>
              <a
                href="https://www.youtube.com/watch?v=mpnAZO0tlLo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="primary">Watch now</Button>
              </a>
            </div>

            <div className="h-44 xs:h-60 sm:h-full">
              <iframe
                className="rounded-xl"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/mpnAZO0tlLo?si=7py5u8pcuBmLH-cP"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Links and Resources */}
          <div className="grid grid-cols-2 sm:grid-cols-1">
            <div className="mr-6 grid grid-cols-1 place-items-center font-medium text-[#bc43df] sm:mb-4 sm:mr-0 sm:grid-cols-3 sm:px-4">
              <Paragraph>Notes</Paragraph>
              <Paragraph>Links</Paragraph>
              <Paragraph>Documentation</Paragraph>
            </div>

            <div className="grid grid-cols-1 place-items-center gap-y-8 overflow-hidden rounded-xl bg-slate-50 px-4 py-3 drop-shadow-2xl sm:grid-cols-3">
              <ResourceIcon path="google_drive.png" alt="Google Drive" />
              <ResourceIcon path="github.png" alt="Github" />
              <ResourceIcon path="H_logo.png" alt="Documentation" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ResourceIcon = ({ path, alt }) => {
  return (
    <div
      className={` ${alt === "Documentation" ? "w-20 sm:w-24" : "w-16 sm:w-20"}`}
    >
      <Image
        src={`Blog/${path}`}
        alt={alt}
        className="h-full w-full object-contain"
      />
    </div>
  );
};

export default Blog;
