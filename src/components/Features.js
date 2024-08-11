import Image from "next/image";
import React from "react";
import img1 from "../../public/services/1.jpg";
import img2 from "../../public/services/2.jpg";
import img3 from "../../public/services/3.jpg";
import img4 from "../../public/services/4.jpg";
import img5 from "../../public/services/5.jpg";
import img6 from "../../public/community/1.gif";

// const FeatureProduct = ({ imgSrc, title, desc1, desc2, desc3 }) => {
//   return (
//     <div>
//       <Image
//         src={imgSrc}
//         width={100}
//         height={100}
//         alt="features"
//         className="mx-auto"
//       />
//       <h3 className="text-xl font-semibold">{title}</h3>
//       <p>{desc1}</p>
//       <p>{desc2}</p>
//       <p>{desc3}</p>
//     </div>
//   );
// };

const Features = () => {
  return (
    // <section
    //   className="container mx-auto px-5 md:px-16 text-center"
    //   id="features"
    // >
    //   <div className="title text-center">Our Services</div>
    //   <span className="service-name text-center">
    //     We mainly focuses on your attitude and hits the right opportunity to
    //     enhance your goal with the rights services and support systems,leads the
    //     Business Goals by Advanced Software Technologies and IT Solutions
    //   </span>

    //   <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
    //     <FeatureProduct
    //       imgSrc="/features/1.svg"
    //       title="App Development"
    //       desc1="Java Applications"
    //       desc2=".Net Applications"
    //       desc3="JavaScript."
    //     />
    //     <FeatureProduct
    //       imgSrc="/features/2.svg"
    //       title="Cloud Technologiest"
    //       desc1="Workday"
    //       desc2="Informatica"
    //       // desc3="JavaScript."
    //     />
    //     <FeatureProduct
    //       imgSrc="/features/3.svg"
    //       title="Big Data"
    //       desc1="Hadoop"
    //       desc2="Spark"
    //       desc3="Kafka."
    //     />
    //     <FeatureProduct
    //       imgSrc="/features/4.svg"
    //       title="DevOps"
    //       desc1="AWS DevOps"
    //       desc2="Azure DevOps"
    //       // desc3="JavaScript."
    //     />
    //   </div>
    //   <div className="pt-10">
    //     <FeatureProduct
    //       imgSrc="/features/4.svg"
    //       title="SharePoint"
    //       desc1="Integration"
    //       desc2="Migration"
    //       desc3="Customization"
    //     />
    //   </div>
    // </section>

    <section class="py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Our Services
          </h2>

          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            We mainly focuses on your attitude and hits the right opportunity to
            enhance your goal with the rights services and support systems,leads
            the Business Goals by Advanced Software Technologies and IT
            Solutions
          </p>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
          <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <a
              href="#"
              class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 animate-pulse"
            >
              <Image
                src={img1}
                loading="lazy"
                alt=""
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div class="flex flex-col gap-2">
              <h2 class="text-xl font-bold text-gray-800">
                <a
                  href="#"
                  class="transition duration-100 hover:text-rose-500 active:text-rose-600"
                >
                  App Development
                </a>
              </h2>

              <p class="text-gray-500">
                <div> Java Applications</div>
                <div>.Net Applications</div>
                <div>JavaScript</div>
                <div className="">
                  <Image
                    src={img6}
                    width={50}
                    height={50}
                    alt="community image"
                  />
                </div>
              </p>
            </div>
          </article>

          <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <a
              href="#"
              class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 animate-pulse"
            >
              <Image
                src={img2}
                loading="lazy"
                alt=""
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div class="flex flex-col gap-2">
              <h2 class="text-xl font-bold text-gray-800">
                <a
                  href="#"
                  class="transition duration-100 hover:text-rose-500 active:text-rose-600"
                >
                  Cloud Technologiest
                </a>
              </h2>

              <p class="text-gray-500">
                <div> Workday</div>
                <div>.Net Applications</div>
                <div>Informatica</div>
              </p>

              <div>
                <a
                  href="#"
                  class="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700"
                >
                  Read more
                </a>
              </div>
            </div>
          </article>

          <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <a
              href="#"
              class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 animate-pulse"
            >
              <Image
                src={img3}
                loading="lazy"
                alt=""
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div class="flex flex-col gap-2">
              <h2 class="text-xl font-bold text-gray-800">
                <a
                  href="#"
                  class="transition duration-100 hover:text-rose-500 active:text-rose-600"
                >
                  Big Data
                </a>
              </h2>

              <p class="text-gray-500">
                <div> Hadoop</div>
                <div>Spark</div>
                <div>Kafka</div>
              </p>

              <div>
                <a
                  href="#"
                  class="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700"
                >
                  Read more
                </a>
              </div>
            </div>
          </article>

          <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <a
              href="#"
              class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 animate-pulse"
            >
              <Image
                src={img4}
                loading="lazy"
                alt=""
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div class="flex flex-col gap-2">
              <h2 class="text-xl font-bold text-gray-800">
                <a
                  href="#"
                  class="transition duration-100 hover:text-rose-500 active:text-rose-600"
                >
                  DevOps
                </a>
              </h2>

              <p class="text-gray-500">
                <div> AWS DevOps</div>
                <div>Azure DevOps</div>
                {/* <div>JavaScript</div> */}
              </p>

              <div>
                <a
                  href="#"
                  class="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700"
                >
                  Read more
                </a>
              </div>
            </div>
          </article>
          <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <a
              href="#"
              className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 animate-pulse"
            >
              <Image
                src={img5}
                loading="lazy"
                alt=""
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div class="flex flex-col gap-2">
              <h2 class="text-xl font-bold text-gray-800">
                <a
                  href="#"
                  class="transition duration-100 hover:text-rose-500 active:text-rose-600"
                >
                  SharePoint
                </a>
              </h2>

              <p class="text-gray-500">
                <div> Content Management</div>
                <div>Integration</div>
                <div>Migration</div>
                <div>Customization</div>
              </p>

              <div>
                <a
                  href="#"
                  class="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700"
                >
                  Read more
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Features;
