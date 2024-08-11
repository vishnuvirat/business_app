import Image from "next/image";
import img1 from "../../public/community/1.gif"
import img2 from "../../public/community/2.gif"
import img3 from "../../public/community/3.png"

const Card = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <Image
        src={imgSrc}
        width={50}
        height={50}
        alt="community image"
        className="mx-auto"
      />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="leading-loose">
        {desc}
      </p>
    </div>
  );
};

const Community = () => {
  return (
    <section className="container mx-auto px-16 lg:px-32">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2 lg:gap-16 text-center mx-auto">
        <Card imgSrc={img1} title="Join the Community" desc="Engage with a diverse community of tech enthusiasts and professionals who share your passion for innovation and excellence." />
        <Card imgSrc={img2} title="Chat Communication" desc="Connect with our experts through real-time chat, ensuring you get the help you need whenever you need it." />
        <Card imgSrc={img3} title="Github Access" desc="Gain access to our GitHub repository, where you can contribute to innovative projects and work alongside our talented developers." />
      </div>
    </section>
  );
};

export default Community;
