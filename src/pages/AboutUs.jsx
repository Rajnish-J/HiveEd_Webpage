import {
  HeaderTwo,
  Image,
  Paragraph,
} from "../components/GeneralComponents/Styles";
import {
  LearningApproach,
  TeamMembers,
  QuoteSection,
} from "../components/PageComponents/AboutUsSubComponents";

const AboutUs = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="grid grid-cols-1 place-items-center gap-y-4 xs:grid-cols-[auto,auto] xs:gap-6 lg:gap-8">
        <Image
          src="Aboutus/aboutus.png"
          alt="About us"
          className="h-56 lg:row-span-2 lg:h-full"
        />

        <Paragraph className="text-justify">
          At HiveEd, we are dedicated to cultivating knowledge and sparking
          curiosity. Our extensive range of courses includes targeted placement
          training and specialized domain-based learning experiences. We
          prioritize active engagement through limited course access, ensuring
          that every learner is fully immersed. For those interested in
          personalized guidance, our subscription service pairs learners with
          industry experts for tailored mentorship.
        </Paragraph>
        <Paragraph className="text-justify xs:col-span-2 lg:col-span-1 lg:col-start-2">
          In an era that requires continuous learning and flexibility, HiveEd
          stands out as a leader in education, innovation, and empowerment. Join
          us as we transform the way knowledge is acquired and applied, opening
          up a world of opportunities for every learner’s future.
        </Paragraph>
      </section>

      {/* Background Image */}
      <Image
        src="Aboutus/background_aboutus.png"
        alt="Background"
        className="w-[100%] lg:h-36 2xl:h-48"
      />

      {/* Learning Approach Section */}
      <section className="mb-16 grid gap-6 xs:grid-cols-2 sm:mb-24 sm:gap-4 md:mb-40 md:grid-cols-3 lg:gap-10">
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

        <LearningApproach
          title="Student-Centered Approach"
          className="xs:col-span-2 md:col-span-1"
        >
          Our priority lies in the journey of our students. From providing
          continuous support and mentorship to nurturing a collaborative
          learning environment, we are dedicated to assisting students in
          flourishing at every stage.
        </LearningApproach>
      </section>

      {/* Founders Section */}
      <section className="text-center">
        <TeamMembers path="Rajnish.png" nowh="nowh" name="Rajnish J">
          Chief Executive Officer,Founder
        </TeamMembers>

        <QuoteSection
          text="HiveEd aims for global recognition and brand certification. All
            courses are designed to meet international standards and provide
            learners with credentials that hold value worldwide."
        />

        {/* <div className="my-24 grid place-items-center gap-6 md:grid-cols-3">
          <TeamMembers path="Murugesan.jpg" name="Murugesan A">
            Chief Research & Business Officer, Co-Founder
          </TeamMembers>

          <TeamMembers path="Raghul.jpg" name="Raghul R">
            Chief Technology Officer, Co-Founder
          </TeamMembers>

          <TeamMembers path="Sanjay.jpg" name="Sanjay S">
            Chief Curriculum Officer, Co-Founder
          </TeamMembers>
        </div> */}

        {/* <QuoteSection
          text="HiveEd encourages a culture of continuous learning and adaptability.
            Learners are encouraged to explore a diverse range of courses to
            stay competitive in the ever-evolving world of education and work."
        /> */}
      </section>

      {/* Our Team Section */}
      {/* <section className="my-16">
        <HeaderTwo titleFirst="Our Team" />

        <div className="mt-8 grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          <TeamMembers path="Rithika.jpg" name="Rithika P">
            C Admin & Trainer, Aptitude Trainer
          </TeamMembers>

          <TeamMembers path="Nandhakumar.png" nowh="nowh" name="Nandhakumar S">
            Python Trainer,Website Developer
          </TeamMembers>
          <TeamMembers path="Sabari.jpg" name="Sabari R">
            Java Trainer
          </TeamMembers>
          <TeamMembers path="Ponharieesh.jpg" name="Ponharieesh P">
            Python Trainer
          </TeamMembers>
        </div>
      </section> */}

      {/* Vision & Mission Section */}
      <section className="my-16">
        <HeaderTwo titleFirst="Our Vision & Mission" />
        <Paragraph className="mt-6 text-justify">
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
        </Paragraph>
      </section>

      {/* why we started Section */}
      <section>
        <HeaderTwo titleFirst="Why We Started?" />
        <Paragraph className="mt-6 text-justify">
          At Hive.ed, our journey began with a shared vision – to revolutionize
          the way education is delivered and accessed. We recognized the
          evolving needs of learners in a rapidly changing world and set out to
          create a platform that not only imparts knowledge but also nurtures
          curiosity, fosters growth, and paves the way for future success.
        </Paragraph>
      </section>
    </>
  );
};

export default AboutUs;
