import type { Metadata } from "next";
import { Grand_Hotel } from "next/font/google";

const grand_hotel = Grand_Hotel({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "result",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div
        className={`${grand_hotel.className} w-screen h-screen relative overflow-hidden`}
      >
        <img
          src="/background/bg-img.png"
          alt="Background"
          className="opacity-25 absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10">{children}</div>
      </div>
    </html>
  );
}
