"use client";
import { CustomButton } from "@/components/CustomButton";
import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f2f5] p-4">
      <div className="w-full max-w-sm bg-white rounded-4xl px-7 py-8 shadow-lg flex flex-col items-center">

        {/* Illustration */}
        <div className="w-full flex justify-center mt-2 mb-5">
          <img
            src="/human-removebg-preview.png"
            alt="Coaching Illustration"
            className="w-44 h-auto object-contain"
          />
        </div>

        {/* Text */}
        <div className="text-center mb-5">
          <h1 className="text-[22px] font-extrabold text-[#1a2e05] leading-tight mb-2">
            Private Coaching
          </h1>
          <p className="text-gray-400 text-[13px] px-4 leading-relaxed">
            Add one-on-one, confidential sessions for only $35 per session
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2 mb-6">
          <div className="w-12 h-1 bg-[#a3e635] rounded-full" />
          <div className="w-12 h-1 bg-[#a3e635] rounded-full" />
          <div className="w-12 h-1 bg-gray-100 rounded-full" />
        </div>

        {/* Buttons */}
        <div className="w-full space-y-2">
          <CustomButton variant="social">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </CustomButton>

          <CustomButton variant="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 1000" className="w-4 h-4 fill-[#1a2e05]">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49 192.5-49 30.8 0 133.9 2.6 198.3 99zM512.3 168.2c22.1-26 36.6-61.9 36.6-97.8 0-5.2-.6-10.4-1.3-15.6-34.7 1.3-76 23.4-101.3 53.3-19.5 22.7-37.7 58.6-37.7 95.1 0 5.8.6 11.7 1.3 13.6 2.6.6 6.5.6 10.4.6 31.4 0 70.8-21.4 92-48.9z"/>
            </svg>
            Continue with Apple
          </CustomButton>

          <CustomButton variant="social">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-gray-500">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
            Continue As Guest
          </CustomButton>
        </div>

        <p className="text-center mt-5 mb-1 text-gray-500 text-[14px]">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-black hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}