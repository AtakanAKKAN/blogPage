import React from "react";

const Hero = () => {
  return (
    <main className="bg-[url('/img/hero.jpg')] bg-cover bg-center bg-no-repeat mx-auto w-[80%] h-[350px] flex justify-center items-center cursor-pointer rounded-md p-4 my-10">
      <p className="text-3xl font-bold text-solidWhite bg-lightGrey/50 rounded-md p-4">
        Hikayelerinizi paylaşın, farklı hikayelere ortak olun.
      </p>
    </main>
  );
};

export default Hero;
