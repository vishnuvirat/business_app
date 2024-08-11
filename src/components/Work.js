import Image from "next/image";

const WorkCard = ({ num, title, desc }) => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
      <p className="leading-loose">
        {desc}
      </p>
    </div>
  );
};

const Work = () => {
  return (
    <section className="w-full text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center bg-color-change">
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div>
          <h2 className="text-2xl sm:text-4xl font-semibold my-3 text-center ">
            About Us
          </h2>
          <span className="uppercase block font-semibold text-sm tracking-widest text-center text-rose-200">
            Soltex Systems is an IT capability consulting services, its main
            challenge is to set up the IT Consulting services and creates the
            Job trends with the updated Technologies.
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
          <div className="relative">
            <WorkCard num="01" title="Great Culture Team Work." desc="Our experienced technologists communicate regularly with one another, ensuring that real-world technical expertise is passed from person to person. We’ve found that this communication increases our technologists’ knowledge and prepares them for new challenges." />
            <Image
              src={"/work/arrow.svg"}
              width={210}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.5rem] xl:block"
            />
          </div>

          <div className="relative">
            <WorkCard
              num="02"
              title="Join your hands & See for yourself."
              desc="We mainly focuses on your attitude and hits the right opportunity to enhance your goal with the rights services, results in self-satisfaction and leads the Business Goals by Advanced Software Technologies and IT Solutions."
            />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
          </div>
          <div className="relative">
            <WorkCard num="03" title="Services We Offer" desc="Soltex Systems is an IT capability consulting services, its main challenge is to set up the IT Consulting services and creates the Job trends with the updated Technologies." />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.7rem] xl:block"
            />
          </div>
          <WorkCard num="04" title="Soltex Solutions" desc="We mainly focuses on your attitude and hits the right opportunity to enhance your goal with the rights services and support systems,leads the Business Goals by Advanced Software Technologies and IT Solutions"/>
        </div>
      </div>
    </section>
  );
};

export default Work;
