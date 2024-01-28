import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4">
            Sun&apos;s Out ,BOGO&apos;s Out
          </p>
          <p className="px-2 "> Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>

        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg"
          alt="Tasty Egg-dish"
        />
      </div>

      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2 ">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>

        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/4253316/pexels-photo-4253316.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Tasty steak"
        />
      </div>

      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4">
            We deliver desserts Too
          </p>
          <p className="px-2 "> Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>

        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Tasty Egg-dish"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
