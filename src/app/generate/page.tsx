import { TiHeartFullOutline } from "react-icons/ti";

export default function page() {
  return (
    <div className="absolute w-screen h-screen bg-white opacity-75 ">
      <div className="p-10">
        <div className="absolute right-10 ">
          <button className="z-100 flex items-center justify-center gap-2 px-4 py-2 text-center font-semibold bg-primary text-white border border-none rounded-full shadow-lg hover:bg-pink-600">
            <TiHeartFullOutline size={20} />
            Sign out
          </button>
        </div>

        <div className="absolute transform-translate w-4/5 max-w-md text-center ">
          <h1 className="text-5xl font-bold mb-6 text-primary  stroke-2 ">
            Pickup Line Generator
          </h1>
          <p className="text-left text-2xl text-third mb-2">
            Tell us about your crush
          </p>
          <textarea
            className="w-full text-lg py-2 px-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Tell us about your crush..."
            rows={4}
          ></textarea>
          <p className="text-left text-2xl text-third mb-2">Style</p>

          <input
            type="text"
            className="w-full text-lg  py-2 px-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Style (e.g., Funny)"
          />
          <button className="w-full flex items-center justify-center gap-2 text-center text-2xl font-normal py-1.5 bg-primary text-white border border-none rounded-full shadow-lg hover:bg-pink-600">
            <TiHeartFullOutline size={18} />
            Generate for me
            <TiHeartFullOutline size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
