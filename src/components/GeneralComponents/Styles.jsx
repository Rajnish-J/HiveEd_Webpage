export const HeaderTwo = ({ className, titleFirst, titleSecond }) => {
  return (
    <h2
      className={`text-lg font-medium text-[#bc43df] lg:text-xl xl:text-2xl ${className}`}
    >
      {titleFirst}
      {titleSecond && (
        <>
          <br />
          {titleSecond}
        </>
      )}
    </h2>
  );
};

export const Paragraph = ({ className, children }) => {
  return (
    <>
      <p className={`${className} text-sm sm:text-base lg:text-lg`}>
        {children}
      </p>
    </>
  );
};

export const Image = ({ className = "", src, alt }) => {
  return (
    <>
      <img src={`/assets/${src}`} alt={alt} className={`${className}`} />
    </>
  );
};
