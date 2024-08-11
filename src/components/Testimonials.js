import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";
import img2 from "../../public/testimonials/2.png"
import img1 from "../../public/testimonials/1.png"
import img3 from "../../public/testimonials/3.png"
import img4 from "../../public/testimonials/4.png"
import img5 from "../../public/testimonials/5.png"
import img6 from "../../public/testimonials/6.png"

const Card = ({ star, title, imgSrc, desc }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-green-800">
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        {star}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">{desc}</p>
      <div className="flex items-center gap-4 mt-5">
        <Image src={imgSrc} width={50} height={50} alt="testimonials" />
        <div>
          <Link
            href=""
            target="_blank"
            className="text-green-800 font-[500]"
          >
            @soltexsystems
          </Link>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="testimonial"
    >
      <div>
        <h2 className="title text-center ">Our Values</h2>
        <span className="service-name text-center ">Mission & Vision</span>
      </div>
      <Carousel {...carouselParams}>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Empower Businesses with Advanced IT Solutions"
            imgSrc={img1}
            desc="Soltex Systems strives to deliver innovative IT solutions that empower businesses to thrive in a digital-first world. We focus on tailored strategies that address unique needs."
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Drive Job Creation Through Technological Advancements"
            imgSrc={img2}
            desc="At Soltex Systems, we are dedicated to generating job opportunities through IT consulting services. Our focus is on creating impactful roles that drive growth and innovation."
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Lead Industry Standards with Innovative IT Strategies"
            imgSrc={img3}
            desc="Soltex Systems is dedicated to advancing technology by implementing the latest innovations. Our mission is to ensure clients leverage the most effective solutions."
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Innovative IT Leadership"
            imgSrc={img4}
            desc="Soltex Systems envisions becoming a global leader in IT innovation, driving advancements that shape the future of technology. We aim to set new standards for excellence."
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Transformative Impact on Industries"
            imgSrc={img5}
            desc="Our goal is to partner with diverse sectors to implement technology that revolutionizes their processes and enhances their competitive edge in the market."
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Empowering Global Talent"
            imgSrc={img6}
            desc="Our vision includes creating a diverse and inclusive workforce that reflects the global nature of technology and fosters innovation through varied perspectives and experiences."
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
