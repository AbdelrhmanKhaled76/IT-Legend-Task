"use client";
import Image from "next/image";
import videoImage from "/public/images/video-image.png";
import user_1 from "/public/images/user-1.png";
import user_2 from "/public/images/user-2.png";
import user_3 from "/public/images/user-3.png";
import lockIcon from "/public/images/locked-padlock-.png";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faBook,
  faChalkboardUser,
  faGlobe,
  faGraduationCap,
  faMoneyBill,
  faPlay,
  faSheetPlastic,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFileLines,
  faClock,
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";
import { inter, spartan } from "./layout";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import OverView from "@/components/overView";
import SideSection from "@/components/sideSection";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [openOverView, setOpenOverView] = useState(false);
  const videoUrl = isPlaying
    ? "https://www.youtube.com/embed/vN4iSTbNnfQ?autoplay=1&mute=1"
    : "";

  return (
    <main className="py-5 container grid grid-cols-1 xl:grid-cols-3 gap-10">
      <section className="col-span-1 xl:col-span-2">
        <figure>
          <div className="relative flex justify-center items-center w-full aspect-video">
            {isPlaying ? (
              <iframe
                src={videoUrl}
                title="Course Video"
                allow="autoplay"
                allowFullScreen
                className="rounded absolute top-0 left-0 w-full h-full"
              ></iframe>
            ) : (
              <>
                <div className="rounded w-full h-full object-center absolute top-0 left-0 bg-black opacity-70 z-10"></div>
                <Image
                  width={1200}
                  height={800}
                  src={videoImage}
                  alt="Click to play video"
                  className="rounded w-full h-full object-center absolute top-0 left-0"
                  priority
                />
                <button
                  title="Play Video"
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="absolute cursor-pointer bg-[#ffffff] w-[70px] h-[70px] rounded-full text-[#e54860] text-[20px] flex justify-center items-center z-20"
                >
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </>
            )}
          </div>
        </figure>
        <ul className="flex justify-baseline items-center py-6">
          <li>
            <Link href={""}>
              <FontAwesomeIcon
                icon={faFacebookF}
                className="px-3 py-2 rounded-full border border-gray-300 text-gray-500 me-4 duration-500 transition-all hover:bg-[#0866ff] hover:text-white"
              />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <FontAwesomeIcon
                icon={faTwitter}
                className="px-2 py-2 rounded-full border border-gray-300 text-gray-500 me-4 duration-500 transition-all hover:bg-[#01a3f2] hover:text-white"
              />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="px-2 py-2 rounded-full border border-gray-300 text-gray-500 me-4 duration-500 transition-all hover:bg-[#0a66c2] hover:text-white"
              />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <FontAwesomeIcon
                icon={faYoutube}
                className="px-2 py-2 rounded-full border border-gray-300 text-gray-500 me-4 duration-500 transition-all hover:bg-[#ff0033] hover:text-white"
              />
            </Link>
          </li>
        </ul>
        <section className="w-full">
          <h2 className={`${spartan.className} font-medium text-[30px] py-5`}>
            Course Materials
          </h2>
          <div className="bg-white p-10 rounded grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 shadow">
            <div className="flex justify-between items-center border-b py-4 border-gray-300">
              <div className="flex justify-between items-center">
                <FontAwesomeIcon icon={faClock} className="pe-3 text-[20px]" />
                <p>Duration :</p>
              </div>
              <p className="font-medium">3 weeks</p>
            </div>
            <div className="flex justify-between items-center border-b py-4 border-gray-300">
              <div className="flex justify-between items-center">
                <FontAwesomeIcon
                  icon={faMoneyBill}
                  className="pe-3 text-[20px]"
                />
                <p>Price :</p>
              </div>
              <p className="font-medium">12000$</p>
            </div>
            <div className="flex justify-between items-center border-b py-4 border-gray-300">
              <div className="flex justify-between items-center">
                <FontAwesomeIcon icon={faBook} className="pe-3 text-[20px]" />
                <p>Lessons :</p>
              </div>
              <p className="font-medium">8</p>
            </div>
            <div className="flex justify-between items-center border-b py-4 border-gray-300">
              <div className="flex justify-between items-center">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="pe-3 text-[20px]"
                />
                <p>Starts at :</p>
              </div>
              <p className="font-medium">3/16</p>
            </div>
            <div className="flex justify-between items-center border-b py-4 border-gray-300">
              <div className="flex justify-between items-center">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="pe-3 text-[20px]"
                />
                <p>Enrolled :</p>
              </div>
              <p className="font-medium">65students</p>
            </div>
            <div className="flex justify-between items-center border-b py-4 border-gray-300">
              <div className="flex justify-between items-center">
                <FontAwesomeIcon
                  icon={faChalkboardUser}
                  className="pe-3 text-[20px]"
                />
                <p>Instructor :</p>
              </div>
              <p className="font-medium">Dr. Ali shahin</p>
            </div>
            <div className="flex justify-between items-center border-b py-4 border-gray-300">
              <div className="flex justify-between items-center">
                <FontAwesomeIcon icon={faGlobe} className="pe-3 text-[20px]" />
                <p>Language :</p>
              </div>
              <p className="font-medium">English</p>
            </div>
            <div className="flex justify-between items-center border-b py-4 border-gray-300">
              <div className="flex justify-between items-center">
                <FontAwesomeIcon
                  icon={faSheetPlastic}
                  className="pe-3 text-[20px]"
                />
                <p>assignment :</p>
              </div>
              <p className="font-medium">4</p>
            </div>
          </div>
        </section>

        <section className="w-full mt-5">
          <h2 className={`${spartan.className} font-medium text-[30px] py-5`}>
            Comments
          </h2>
          <section>
            <div className="w-full flex justify-between items-start gap-5 py-10">
              <figure className="flex-shrink-0">
                <Image
                  src={user_1}
                  alt="user picture"
                  className="w-[100px] h-[100px] rounded-full me-5 flex-shrink-0"
                  loading="lazy"
                />
              </figure>
              <figcaption className="flex justify-between items-start gap-4 flex-col">
                <h4
                  className={
                    "text-[20px] text-gray-500 font-medium " + spartan.className
                  }
                >
                  Student Name Goes Here
                </h4>
                <p className="text-gray-400">Oct 10, 2021</p>
                <p className={inter.className + " text-gray-500"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit rerum vel accusamus sint consectetur laborum natus,
                  blanditiis error debitis iure!
                </p>
              </figcaption>
            </div>
            <hr className="text-gray-300" />
            <div className="w-full flex justify-between items-start gap-5 py-10">
              <figure className="flex-shrink-0">
                <Image
                  src={user_2}
                  alt="user picture"
                  className="w-[100px] h-[100px] rounded-full me-5 "
                  loading="lazy"
                />
              </figure>
              <figcaption className="flex justify-between items-start gap-4 flex-col">
                <h4
                  className={
                    "text-[20px] text-gray-500 font-medium " + spartan.className
                  }
                >
                  Student Name Goes Here
                </h4>
                <p className="text-gray-400">Oct 15, 2021</p>
                <p className={inter.className + " text-gray-500"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit rerum vel accusamus sint consectetur laborum natus,
                  blanditiis error debitis iure!
                </p>
              </figcaption>
            </div>
            <hr className="text-gray-300" />
            <div className="w-full flex justify-between items-start gap-5 py-10">
              <figure className="flex-shrink-0">
                <Image
                  src={user_3}
                  alt="user picture"
                  className="w-[100px] h-[100px] rounded-full me-5 "
                  loading="lazy"
                />
              </figure>
              <figcaption className="flex justify-between items-start gap-4 flex-col">
                <h4
                  className={
                    "text-[20px] text-gray-500 font-medium " + spartan.className
                  }
                >
                  Student Name Goes Here
                </h4>
                <p className="text-gray-400">Oct 19, 2021</p>
                <p className={inter.className + " text-gray-500"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit rerum vel accusamus sint consectetur laborum natus,
                  blanditiis error debitis iure!
                </p>
              </figcaption>
            </div>
            <form
              action=""
              method="post"
              className={
                "flex justify-between flex-col items-start gap-7 pb-14 " +
                inter.className
              }
            >
              <textarea
                name="comment"
                title="type you comment here"
                required
                placeholder="Write a comment"
                className="w-full h-[200px] shadow p-5 rounded bg-white"
              ></textarea>
              <button
                className="p-5 text-white bg-[#41b69d] rounded-md cursor-pointer"
                type="submit"
              >
                Submit Review <FontAwesomeIcon icon={faArrowRightLong} />
              </button>
            </form>
          </section>
        </section>
      </section>

      <SideSection
        openOverView={openOverView}
        setOpenOverView={setOpenOverView}
      />
      <OverView show={openOverView} onClose={() => setOpenOverView(false)} />
    </main>
  );
}
