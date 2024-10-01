import { HeaderTwo, Paragraph, Image } from "../GeneralComponents/Styles";

export const LearningApproach = ({ title, children, className }) => {
  return (
    <div
      className={`overflow-hidden rounded-lg bg-[#f8f1fa] px-4 py-3 ${className}`}
    >
      <HeaderTwo titleFirst={title} />
      <Paragraph className="mt-3 text-justify">{children}</Paragraph>
    </div>
  );
};

export const TeamMembers = ({ path, name, nowh, children }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`aspect-square overflow-hidden rounded-full ${!nowh ? "h-40 w-40" : ""}`}
      >
        <Image src={`Aboutus/${path}`} alt={name} />
      </div>

      <Paragraph className="mt-1">{name}</Paragraph>
      <Paragraph>{children}</Paragraph>
    </div>
  );
};

export const QuoteSection = ({ text }) => {
  return (
    <div className="relative mx-[20vw] mt-12">
      <Image
        src="Aboutus/open-quotes.png"
        alt="Open Quotes"
        className="absolute left-[-8vw] top-[-1vw] md:left-[-4vw]"
      />
      <Paragraph className="font-medium">{text}</Paragraph>
      <Image
        src="Aboutus/end-quotes.png"
        alt="End Quotes"
        className="absolute bottom-0 right-0 xs:bottom-[-2vw] xs:right-[-5vw] sm:bottom-[-1vw] md:right-[-3vw]"
      />
    </div>
  );
};
