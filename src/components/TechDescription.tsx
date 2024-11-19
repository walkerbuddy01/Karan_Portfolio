import React from "react";

function TechDescription({ title, techs }: { title: string; techs: string[] }) {
  const length = techs.length;
  return (
    <div className="h-full w-full  flex items-center border-t border-b border-gray-500">
      <div className="h-full w-[35%] border-r border-gray-500 overflow-hidden">
        <p className="text-[3.5vw] font-helveticaNowDisplayMedium uppercase td translate-y-[100%] origin-top-left rotate-[15deg]  text-white px-[4vw]">
          {title}
        </p>
      </div>
      <div className="h-full w-[65%] overflow-hidden ">
        <p className="text-[1.8vw] h-full font-helveticaNowDisplayMedium  uppercase td translate-y-[100%]  text-white px-[4vw] origin-top-left rotate-[15deg] ">
          {techs.map((tech, index) =>
            index === length - 1 ? tech : `${tech}, `
          )}
        </p>
      </div>
    </div>
  );
}

export default TechDescription;
