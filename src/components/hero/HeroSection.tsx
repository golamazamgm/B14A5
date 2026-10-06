import React from 'react';

const HeroSection = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between text-center md:text-left px-4 md:max-w-5xl lg:max-w-6xl mx-auto mt-8 lg:mt-16">
            <div >
                <h1 className="text-4xl font-extrabold">Build Your Ideal <br />
                    <span className=" bg-[linear-gradient(90deg,#FF5722_0%,#D8187E_50%,#7C3AED_100%)] text-transparent bg-clip-text   ">Development Stack</span></h1>
                <p>
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div>
                    <button className="btn">Explore Technologies</button>
                    <button>Learn More</button>
                </div>
            </div>

            <div>
                <img className="w-full" src="banner-stack.png" alt="banner stack dev" />
            </div>


        </div>
    );
};

export default HeroSection;