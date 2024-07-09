import { BiCopyAlt } from "react-icons/bi";
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

          <p className="text-center text-xl text-third mb-2">
            Copy the below pick up lines
          </p>

          {/* card */}
          <div className="relative text-left bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
            <h2 className="text-2xl font-semibold text-cardPrimary mb-2">
              Pickup line 1
            </h2>
            <p className="text-lg text-cardSecondary">
              Write in a scholarly tone, utilising accurate, authoritative
              sources and citations. Ensure that your...
            </p>

            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <BiCopyAlt size={20} />
            </button>
          </div>

          <button className="w-full flex items-center justify-center gap-2 text-center text-2xl font-normal py-1.5 bg-primary text-white border border-none rounded-full shadow-lg hover:bg-pink-600">
            <TiHeartFullOutline size={18} />
            Regenerate pickup line
            <TiHeartFullOutline size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
