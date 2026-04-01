import bannerImg from "../assets/banner.png";
import { Dot, Play } from "lucide-react";

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-10 py-16">

            <div className="flex flex-col lg:flex-row items-center gap-12">

                {/* Left */}
                <div className="flex-1">

                    {/* Tag */}
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                        <svg width="30" height="30" viewBox="0 0 40 40">
                            {/* Outer soft glow */}
                            <circle cx="20" cy="20" r="12" fill="#c084fc" opacity="0.15" />

                            {/* Mid glow */}
                            <circle cx="20" cy="20" r="8" fill="#a855f7" opacity="0.3" />

                            {/* Inner glow */}
                            <circle cx="20" cy="20" r="5" fill="#9333ea" opacity="0.6" />

                            {/* Core dot */}
                            <circle cx="20" cy="20" r="3" fill="#7e22ce" />
                        </svg>

                        New: AI-Powered Tools Available
                    </span>

                    {/* left side content */}
                    <h1 className="text-6xl font-extrabold mt-4 leading-tight">
                        Supercharge Your <br /> Digital Workflow
                    </h1>

                    {/* heading */}
                    <p className="mt-4 text-gray-500 max-w-md">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place.
                    </p>


                    {/* details & button*/}
                    <div className="mt-6 flex gap-4">
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-6 hover:bg-purple-700">
                            Explore Products
                        </button>

                        <button className="btn btn-outline rounded-full flex items-center gap-2">
                            <Play size={16} />
                            Watch Demo
                        </button>
                    </div>

                </div>

                {/* Right */}
                <div className="flex-1">
                    <img src={bannerImg} className="w-full max-w-md mx-auto" />
                </div>

            </div>

        </div>
    );
};

export default Banner;