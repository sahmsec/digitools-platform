const Stats = () => {
    return (
        <div className="py-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">

            <div className="max-w-6xl mx-auto flex items-center justify-between text-white">

               {/* left */}
                <div className="text-center flex-1">
                    <h2 className="text-5xl font-bold">50K+</h2>
                    <p className="mt-1 text-sm opacity-80">Active Users</p>
                </div>

                
                <div className="h-15 w-0.5 bg-white/30"></div>

                {/* middle */}
                <div className="text-center flex-1">
                    <h2 className="text-5xl font-bold">200+</h2>
                    <p className="mt-1 text-sm opacity-80">Premium Tools</p>
                </div>

                
                <div className="h-15 w-0.5 bg-white/30"></div>

                {/* right */}
                <div className="text-center flex-1">
                    <h2 className="text-5xl font-bold">4.9</h2>
                    <p className="mt-1 text-sm opacity-80">Rating</p>
                </div>

            </div>

        </div>
    );
};

export default Stats;