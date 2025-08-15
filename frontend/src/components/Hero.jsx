export default function Hero() {
    return (
      <section className="flex flex-col items-center text-center py-10">
        {/* Tagline */}
        <h2 className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
          <span className="text-yellow-400 font-semibold">Watch</span> your favorite shows.{" "}
          <span className="text-blue-400 font-semibold">Share</span> your ratings.{" "}
          <span className="text-orange-400 font-semibold">Connect</span> with fans just like you.
        </h2>
  
        {/* Get Started Button */}
        <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
          Get started
        </button>
  
        {/* Featured Shows */}
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          {/* Placeholder 1 */}
          <div className="border-4 border-yellow-400 w-48 h-64 flex items-center justify-center text-gray-500">
            Big Time Rush
          </div>
  
          {/* Placeholder 2 */}
          <div className="border-4 border-transparent w-48 h-64 flex items-center justify-center text-gray-500">
            Breaking Bad
          </div>
  
          {/* Placeholder 3 */}
          <div className="border-4 border-transparent w-48 h-64 flex items-center justify-center text-gray-500">
            Adventure Time
          </div>
        </div>
      </section>
    );
  }
  