import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHandFist } from "@fortawesome/free-solid-svg-icons/faHandFist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import itLegendImage from "/public/images/IT LEGEND logo-02.png"
import React from "react";
import Image from "next/image";

const OverView = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center duration-500 transition-all ease-in-out z-50 flex-col bg-[#182578] gap-20">
      <Image
        src={itLegendImage}
        alt="it legend logo"
        className=" text-center"
      />
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg relative w-[300px] sm:w-full">
        <button
          title="this button closes the course overview window"
          type="button"
          onClick={() => onClose()}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <p className="text-center text-[#182578]">Course Name Shown Here</p>
        <h2 className="text-2xl font-bold my-4 text-center text-[#182578]">
          Leaderboard
        </h2>
        <div className="flex justify-between items-center gap-5 p-4 bg-[#f5f9fa] text-[#182578] ">
          <p className="text-right">
            عظيم يا صديقي.. أداءك في الكورس ده أفضل من 60% من باقي الطلبة.. كمّل
            عايز أشوف اسمك في الليدر بورد هنا
          </p>
          <FontAwesomeIcon
            icon={faHandFist}
            className="text-[20px] text-[#182578]"
          />
        </div>
      </div>
    </div>
  );
};

export default OverView;
