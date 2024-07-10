import { BiCopyAlt } from "react-icons/bi";
import { TiHeartFullOutline } from "react-icons/ti";
import { createSupabaseServerClient } from "../lib/supabase/server";
import { redirect } from "next/navigation";

export default function page() {
  const Logout = async () => {
    "use server";

    const supabase = await createSupabaseServerClient();

    await supabase.auth.signOut();

    redirect("/login");
  };

  return (
    <div className="absolute w-screen h-screen bg-white bg-opacity-0  ">
      <div className="p-11 relative z-10">
        <div className="absolute right-11 cursor-pointer ">
          <button className="text-logout text-3xl bg-logoutBack flex items-center justify-center gap-2 px-6 py-2 text-center font-medium border border-none rounded-full shadow-lg cursor-pointer">
            Sign out
          </button>
        </div>

        <div className="absolute transform-translate mx-auto w-full text-center ">
          <h1 className="text-5xl font-normal mb-7 text-primary  stroke-2 ">
            Pickup Line Generator
          </h1>

          <p className="text-center text-xl text-third mb-2">
            Copy the below pick up lines
          </p>

          {/* card */}
          <div className="relative text-left bg-white border max-w-md mx-auto rounded p-4 mb-4 shadow-md border-primary">
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

          <div className="relative text-left bg-white border max-w-md mx-auto rounded p-4 mb-4 shadow-md border-primary">
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

          <button className="w-full flex items-center justify-center mx-auto max-w-md gap-2 text-center text-2xl font-normal py-1.5 bg-primary text-white border border-none rounded-full shadow-lg hover:bg-pink-600">
            <TiHeartFullOutline size={18} />
            Regenerate pickup line
            <TiHeartFullOutline size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
