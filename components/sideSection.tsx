"use client";
import Image from "next/image";
import lockIcon from "/public/images/locked-padlock-.png";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFileLines,
} from "@fortawesome/free-regular-svg-icons";
import { inter, spartan } from "../app/layout";
import OverView from "@/components/overView";

const SideSection = ({
  openOverView,
  setOpenOverView,
}: {
  openOverView: boolean;
  setOpenOverView: any
}) => {
  const progressBarRef = useRef(null);
  const [courseProgress, setCourseProgress] = useState<number>(0);
  useEffect(() => {
    if (openOverView)
      <OverView
        show={openOverView}
        onClose={() => {
          return;
        }}
      />;
  }, [openOverView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start the animation when the progress bar is in view
          setCourseProgress(63); // Set the progress value (e.g., 63%)
        } else {
          // Reset the progress when the section goes out of view
          setCourseProgress(0);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current); // Start observing the progress bar
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current); // Cleanup observer
      }
    };
  }, []);
  return (
    <aside className="px-5">
      <h2 className="text-[26px] font-medium">Topics for This Course</h2>
      <div
        ref={progressBarRef} // Attach the ref to the progress bar container
        className="relative w-full h-2 bg-gray-200 rounded mt-16 "
      >
        {/* Progress Bar Fill */}
        <div
          className="absolute inset-0 bg-[#6abd8a] h-full rounded transition-all duration-500 ease-in-out"
          style={{ width: `${courseProgress}%` }} // Dynamic width based on progress
        ></div>

        {/* "You" Indicator */}
        <div
          className="absolute -top-14 transform -translate-x-1/2 transition-all duration-500 ease-in-out"
          style={{ left: `${courseProgress}%` }} // Position the indicator
        >
          <p className="text-[12px] px-2 py-2 border-3 border-[#c8c8c8] rounded-[50%] text-[#485293] flex justify-center items-center me-2">
            You
          </p>
          <FontAwesomeIcon
            icon={faSortDown}
            className="ms-[18px] text-[#c8c8c8] text-[12px] transform -translate-y-3"
          />
        </div>

        {/* Progress Percentage */}
        <div
          className="absolute top-4 transform -translate-x-1/2 transition-all duration-500 ease-in-out"
          style={{ left: `${courseProgress}%` }} // Position the percentage
        >
          <span className="text-[#485293] text-[12px] md:text-[14px]">
            {courseProgress}%
          </span>
        </div>
      </div>
      <section
        className={"mt-20 border border-gray-300 px-4 py-6 " + inter.className}
      >
        <h4 className="text-[24px]  pb-2">Week 1-4</h4>
        <p className={` text-[20px] text-gray-400 ` + spartan.className}>
          Advanced story telling techniques for writers: Personas, Characters &
          Plots
        </p>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px] ">Introduction</span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">Course Overview</span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
        <button
          type="button"
          onClick={() => setOpenOverView(true)}
          className="flex justify-between items-center py-2 gap-2 cursor-pointer"
        >
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">Course Overview</span>
          </article>
          <p className=" bg-[#f2faf8] text-[#6abd8a] px-2 py-1 uppercase">
            0 questions
          </p>
          <p className=" bg-[#fdf2f4] text-[#e54860] px-2 py-1 uppercase">
            10 minutes
          </p>
        </button>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">
              Course Exercise / Reference Files
            </span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">
              Course Editor installation (Optional if you have one)
            </span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">
              Embedding PHP in HTML
            </span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
      </section>
      <section
        className={"mt-20 border border-gray-300 px-4 py-6 " + inter.className}
      >
        <h4 className="text-[24px]  pb-2">Week 5-8</h4>
        <p className={` text-[20px] text-gray-400 ` + spartan.className}>
          Advanced story telling techniques for writers: Personas, Characters &
          Plots
        </p>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px] ">Defining Functions</span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">Function Parameters</span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">
              Return Values From Functions
            </span>
          </article>
          <div className="flex justify-between items-center flex-col gap-2">
            <p className=" bg-[#f2faf8] text-[#6abd8a] px-2 py-1 uppercase">
              2 questions
            </p>
            <p className=" bg-[#fdf2f4] text-[#e54860] px-2 py-1 uppercase">
              15 minutes
            </p>
          </div>
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">
              Global Varialble and Scope
            </span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">
              Newer Way of creating a Constant
            </span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">Constants</span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
      </section>
      <section
        className={"mt-20 border border-gray-300 px-4 py-6 " + inter.className}
      >
        <h4 className="text-[24px]  pb-2">Week 5-8</h4>
        <p className={` text-[20px] text-gray-400 ` + spartan.className}>
          Advanced story telling techniques for writers: Personas, Characters &
          Plots
        </p>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px] ">Defining Functions</span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">Function Parameters</span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">
              Return Values From Functions
            </span>
          </article>
          <div className="flex justify-between items-center flex-col gap-2">
            <p className=" bg-[#f2faf8] text-[#6abd8a] px-2 py-1 uppercase">
              2 questions
            </p>
            <p className=" bg-[#fdf2f4] text-[#e54860] px-2 py-1 uppercase">
              15 minutes
            </p>
          </div>
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">
              Global Varialble and Scope
            </span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">
              Newer Way of creating a Constant
            </span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
        <div className="flex justify-between items-center py-2 gap-2">
          <article>
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: "#000000", paddingRight: 8 }}
            />
            <span className="font-light text-[16px]">Constants</span>
          </article>
          <Image src={lockIcon} alt="lock icon" className="w-5" />
        </div>

        <hr className="my-3 font-extralight text-gray-300" />
      </section>
    </aside>
  );
};

export default SideSection;
