import bannerImg from "../assets/banner.png";
import { Play } from "lucide-react";

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-10 py-16">

            <div className="flex flex-col lg:flex-row items-center gap-12">

                {/* Left */}
                <div className="flex-1">

                    {/* Tag */}
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                        ● New: AI-Powered Tools Available
                    </span>

                    {/* Heading */}
                    <h1 className="text-5xl font-bold mt-4 leading-tight">
                        Supercharge Your <br /> Digital Workflow
                    </h1>

                    {/* Description */}
                    <p className="mt-4 text-gray-500 max-w-md">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex gap-4">

                        <button className="btn bg-purple-600 text-white rounded-full px-6 hover:bg-purple-700">
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