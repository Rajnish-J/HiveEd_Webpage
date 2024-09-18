import Button from "../components/Button";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Blog = () => {
  return (
    <>
      <section className="flex flex-col gap-6">
        <h1 className="font-semibold text-[#bc43df] xs:text-lg md:text-xl xl:text-2xl">
          Unlock Your Potential with Out <br /> Comprehensive Course Offerings
        </h1>
        <p className="text-justify text-sm xs:text-base md:text-lg">
          Adaptation to Industry Trends: Hive.ed stays current with industry
          trends and emerging domains. Regularly update course offerings to
          reflect the evolving needs of learners and the job market.
        </p>
        <p className="text-justify text-sm xs:text-base md:text-lg">
          Global Recognition: Hive.ed aims for global recognition and brand
          certification. All courses are designed to meet international
          standards and provide learners with credentials that hold value
          worldwide.
        </p>
      </section>

      <hr className="my-12 border-gray-400 sm:my-16" />

      <section>
        <h1 className="mb-6 font-semibold text-[#bc43df] xs:text-lg md:text-xl xl:text-3xl">
          Latest Updates
        </h1>

        <div className="md:mx-[14 vw] xs:mx-[6vw] sm:mx-[10vw] md:mx-[12vw] lg:mx-[16vw]">
          <div className="grid place-content-center place-items-center gap-8 overflow-hidden rounded-xl bg-slate-50 p-4 drop-shadow-2xl xs:grid-cols-[auto,auto] md:py-6">
            <div>
              <h1 className="mb-4 text-lg font-medium text-[#bc43df] sm:mb-6 lg:text-xl xl:mb-8">
                Youtube Video
              </h1>
              <Button type="secondary">Online Class</Button>
              <h4 className="my-4 sm:my-6 lg:text-lg xl:my-8">
                Every <FiberManualRecordIcon className="p-2" />
                Week
              </h4>
              <Button type="primary">Watch now</Button>
            </div>

            <div className="h-44 w-64 overflow-hidden xs:w-56 md:h-48 md:w-64 lg:w-64 xl:h-72 xl:w-96">
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

          <div className="my-24 flex justify-center gap-6 sm:flex-col">
            <div className="flex flex-col items-center justify-around font-medium text-[#bc43df] xs:text-lg sm:flex-row xl:justify-between">
              <p className="xl:ml-12">Notes</p>
              <p>Links</p>
              <p>Documentation</p>
            </div>

            <div className="flex h-[60vh] flex-col items-center justify-between overflow-hidden rounded-xl bg-slate-50 px-4 py-3 drop-shadow-2xl sm:h-auto sm:flex-row">
              <img src="/assets/Blog/google_drive.png" alt="Google Drive" />
              <img src="/assets/Blog/github.png" alt="Github" />
              <img src="/assets/Blog/H_logo.png" alt="Documentation" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
