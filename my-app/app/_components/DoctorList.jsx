import React from "react";
import Image from "next/image";

function DoctorList({ doctorList }) {
  return (
    <div className="mb-10">
      <h1 className="font-bold text-xl">Popular Doctors</h1>
      {/* Doctor List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        {doctorList &&
          doctorList.map((doctor, index) => (
            <div className="border-[1px] rounded-lg p-3" key={index}>
              <Image
                src={doctor.attributes?.image?.data?.attributes?.url}
                alt="doctor"
                width={500}
                height={200}
                className="rounded-XL shadow-md m-2 h-[200px] w-full "
              />
              <div className="text-[10px] mt-1 flex flex-col gap-2 items-baseline">
                <p className=" text-sm bg-blue-100 p-1 rounded-full px-2 text-primary">
                  {doctor.attributes?.categories?.data?.attributes?.Name}
                </p>{" "}
                <h2 className="font-bold text-lg ">
                  Dr. {doctor.attributes?.Name}
                </h2>
                <p className="text-gray-500 text-sm">
                  {doctor.attributes?.Year_of_Exprience} Experience
                </p>
                <p className="text-gray-500 text-sm">
                  {doctor.attributes?.Address}
                </p>
                <h2 className="p-2 px-3 border-1">Book Appointment</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default DoctorList;
