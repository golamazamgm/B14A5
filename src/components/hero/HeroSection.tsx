

const HeroSection = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center  justify-between text-center md:text-left px-4 md:max-w-5xl lg:max-w-6xl mx-auto mt-2 ">
            <div >
                <h1 className=" md:text-5xl text-4xl font-extrabold">Build Your Ideal <br />
                    <span className=" bg-[linear-gradient(90deg,#FF5722_0%,#D8187E_50%,#7C3AED_100%)] text-transparent bg-clip-text   ">Development Stack</span></h1>
                <p className="max-w-md mt-4 mb-4 md:mt-8 md:mb-8 text-[#475569]">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className=" grid grid-cols-2 gap-2 max-w-96 ">
                    <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white text-sm px-5 py-2.5 rounded-lg font-medium shadow">Explore Technologies</button>
                    <button className=" px-5 font-medium btn text-sm py-6 rounded-lg ">Learn More</button>
                </div>
            </div>

            <div>
                <img className="w-full" src="banner-stack.png" alt="banner stack dev" />
            </div>


        </div>
    );
};

export default HeroSection;