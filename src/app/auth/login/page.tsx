import { FcGoogle } from "react-icons/fc";
import { TiHeartFullOutline } from "react-icons/ti";

export default function Page() {
  return (
    <section className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center justify-center bg-primary p-3.5 rounded-lg">
            <TiHeartFullOutline size={22} className="text-white" />
          </div>
        </div>
        <h1 className="text-xl font-semibold mb-2 text-secondary">
          Pickup line generator
        </h1>
        <p className="text-base text-gray-500 mb-7">
          Generate pickup line for your crush now!
        </p>
        <button className="w-full flex items-center justify-center gap-2 text-center font-semibold p-3 bg-button text-secondary border border-none rounded-3xl shadow-sm hover:bg-gray-100">
          <FcGoogle size={24} />
          Sign up with Google
        </button>
        <p className="mt-6 text-gray-400 text-sm">
          By signing up, you agree to the
          <span> </span>
          <a href="#" className="underline">
            Terms of Use
          </a>
          ,<span> </span>
          <a href="#" className="underline">
            Privacy Notice
          </a>
          .
        </p>
      </div>
    </section>
  );
}
