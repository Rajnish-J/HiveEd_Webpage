import Marquee from "react-fast-marquee";

const imageURL = "/assets/Aboutus";

const AboutUs = () => {
  return (
    <>
      <section className="flex items-center gap-4 md:gap-12">
        <img
          src={`${imageURL}/aboutus.png`}
          alt="About us"
          className="hidden h-48 w-48 sm:inline md:h-auto md:w-auto"
        />

        <p className="text-justify text-sm md:text-base lg:text-lg xl:text-xl">
          At HiveEd, our commitment to fostering knowledge and igniting
          curiosity drives our efforts. We offer a diverse range of courses
          including placements and domain-based learning. Our platinum
          certifications stand as a testament to learners' dedication, while the
          limited course access ensures active engagement. The Self Analysis
          test guarantees an optimal learning experience, and for those seeking
          personalized mentorship, our subscription service connects learners
          with experts. In a world that demands continuous learning and
          adaptability, HiveEd stands as a beacon of education, innovation, and
          empowerment. Join us in redefining the way knowledge is acquired and
          applied, unlocking limitless possibilities for every learner's future.
        </p>
      </section>

      <img
        src={`${imageURL}/background_aboutus.png`}
        alt="Background"
        className="lg:h-36 2xl:h-48"
      />

      <section className="mb-16 grid gap-6 sm:mb-24 sm:grid-cols-3 sm:gap-4 md:mb-40 lg:gap-10">
        <LearningApproach title="Passionate Educators">
          Our team of trainers, while relatively new to the field, bring
          abundant enthusiasm, empathy, and commitment to their roles. They
          recognize the individual requirements of each student and tailor their
          teaching methods accordingly.
        </LearningApproach>

        <LearningApproach title="Practical Learning Approach">
          We advocate for learning through hands-on experience. Our emphasis on
          projects, real-world applications, and interactive sessions ensures
          that students not only understand theoretical concepts but also
          acquire practical skills directly applicable in the industry.
        </LearningApproach>

        <LearningApproach title="Student-Centered Approach">
          Our priority lies in the journey of our students. From providing
          continuous support and mentorship to nurturing a collaborative
          learning environment, we are dedicated to assisting students in
          flourishing at every stage.
        </LearningApproach>
      </section>

      <section className="text-center">
        <TeamMembers path="Rajnish.png" nowh="nowh" name="Mr.Rajnish">
          Chief Executive Officer,Founder
        </TeamMembers>

        <div className="relative mx-[20vw] my-12">
          <img
            src={`${imageURL}/open-quotes.png`}
            alt="Open Quotes"
            className="absolute left-[-8vw] top-[-1vw] md:left-[-4vw]"
          />
          <p className="text-sm font-medium sm:text-base md:text-lg xl:text-xl">
            HiveEd aims for global recognition and brand certification. All
            courses are designed to meet international standards and provide
            learners with credentials that hold value worldwide.
          </p>
          <img
            src={`${imageURL}/end-quotes.png`}
            alt="End Quotes"
            className="xs:right-[-5vw] xs:bottom-[-2vw] absolute bottom-0 right-0 sm:bottom-[-1vw] md:right-[-3vw]"
          />
        </div>

        <div className="my-24 grid place-items-center gap-6 md:grid-cols-3">
          <TeamMembers path="Murugesan.jpg" name="Mr.Murugesan">
            Chief Research & Business Officer, Co-Founder
          </TeamMembers>

          <TeamMembers path="Raghul.jpg" name="Mr.Raghul">
            Chief Technology Officer, Co-Founder
          </TeamMembers>

          <TeamMembers path="Sanjay.jpg" name="Mr.Sanjay">
            Chief Curriculum Officer, Co-Founder
          </TeamMembers>
        </div>

        <div className="relative mx-[20vw] mt-12">
          <img
            src={`${imageURL}/open-quotes.png`}
            alt="Open Quotes"
            className="absolute left-[-8vw] top-[-1vw] md:left-[-4vw]"
          />
          <p className="text-sm font-medium sm:text-base md:text-lg xl:text-xl">
            HiveEd encourages a culture of continuous learning and adaptability.
            Learners are encouraged to explore a diverse range of courses to
            stay competitive in the ever-evolving world of education and work.
          </p>
          <img
            src={`${imageURL}/end-quotes.png`}
            alt="End Quotes"
            className="xs:right-[-5vw] xs:bottom-[-2vw] absolute bottom-0 right-0 sm:bottom-[-1vw] md:right-[-3vw]"
          />
        </div>
      </section>

      <section className="my-16">
        <h1 className="text-xl font-medium text-[#bc43df] md:text-3xl">
          Our Team
        </h1>

        {/* <Marquee></Marquee> */}
        <div className="mt-8 grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          <TeamMembers path="Rithika.jpg" name="Rithika">
            C Admin & Trainer, Aptitude Trainer
          </TeamMembers>

          <TeamMembers path="Nandhakumar.png" nowh="nowh" name="Nandhakumar">
            {/* {SQL Admin & Trainer,*/}Python Trainer,Website Developer 
          </TeamMembers>
          <TeamMembers path="Sabari.jpg" name="Sabari">
            Java Trainer
          </TeamMembers>
          <TeamMembers path="Ponharieesh.jpg" name="Ponharieesh">
            Python Trainer
          </TeamMembers>
        </div>
      </section>

      <section className="my-16">
        <h1 className="text-xl font-medium text-[#bc43df] md:text-3xl">
          Our Vision & Mission
        </h1>
        <p className="mt-8 text-justify text-lg md:text-xl">
          At HiveEd, our goal is to revolutionize the standard of education. We
          are firm believers that every student should have the opportunity to
          receive top-notch training that not only equips them with technical
          skills but also fosters their passion and creativity. Our mission is
          to empower the future tech workforce by offering inclusive,
          captivating, and hands-on education in programming, databases, and
          aptitude. We are dedicated to creating a learning atmosphere where
          students feel encouraged, stimulated, and motivated. Through tailored
          support and inventive teaching approaches, our aim is to unleash the
          inherent potential of each and every learner.
        </p>
      </section>

      <section>
        <h1 className="text-xl font-medium text-[#bc43df] md:text-3xl">
          Why we started?
        </h1>
        <p className="mt-8 text-justify text-lg md:text-xl">
          At Hive.ed, our journey began with a shared vision – to revolutionize
          the way education is delivered and accessed. We recognized the
          evolving needs of learners in a rapidly changing world and set out to
          create a platform that not only imparts knowledge but also nurtures
          curiosity, fosters growth, and paves the way for future success.
        </p>
      </section>
    </>
  );
};

const LearningApproach = ({ title, children }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-[#fbf4fd] px-4 py-3 text-justify">
      <h1 className="mb-4 text-base text-[#bc43df] md:text-lg lg:text-xl 2xl:text-2xl">
        {title}
      </h1>
      <p className="text-justify text-sm lg:text-base 2xl:text-xl">
        {children}
      </p>
    </div>
  );
};

const TeamMembers = ({ path, name, nowh, children }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {nowh && (
        <div className="aspect-square overflow-hidden rounded-full">
          <img src={`${imageURL}/${path}`} alt={name} />
        </div>
      )}

      {!nowh && (
        <div className="aspect-square h-40 w-40 overflow-hidden rounded-full">
          <img src={`${imageURL}/${path}`} alt={name} />
        </div>
      )}
      <p className="text-lg md:text-base lg:text-lg">{name}</p>
      <p className="text-lg md:text-base lg:text-lg">{children}</p>
    </div>
  );
};

export default AboutUs;
