"use client";
import { CustomButton } from "@/components/CustomButton";
import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f2f5] p-4">
      {/* Mobile-like Container */}
      <div className="w-full max-w-100 bg-white rounded-[45px] p-8 shadow-xl flex flex-col items-center">
        
        {/* 1. Illustration (Image) */}
        <div className="w-full flex justify-center mt-8 mb-10">
          <img 
            src="/human-removebg-preview.png" 
            alt="Coaching Illustration" 
            className="w-56 h-auto object-contain"
          />
        </div>

        {/* 2. Text Content */}
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-extrabold text-[#1a2e05] leading-tight mb-2">
            Private Coaching
          </h1>
          <p className="text-gray-500 text-[14px] px-6 leading-relaxed">
            Add one-on-one, confidential sessions for only $35 per session
          </p>
        </div>

        {/* 3. Progress Indicators (The small lines) */}
        <div className="flex gap-2 mb-10">
          <div className="w-16 h-1 bg-[#a3e635] rounded-full"></div> {/* Active */}
          <div className="w-16 h-1 bg-gray-100 rounded-full"></div>
          <div className="w-16 h-1 bg-gray-100 rounded-full"></div>
        </div>

        {/* 4. Action Buttons */}
        <div className="w-full space-y-3">
          <CustomButton variant="social">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="G" className="w-5 h-5" />
            Continue with Google
          </CustomButton>

          <CustomButton variant="secondary">
            <img src="https://www.svgrepo.com/show/303108/apple-black-logo.svg" alt="A" className="w-5 h-5" />
            Continue with Apple
          </CustomButton>

          <CustomButton variant="outline" className="border-none">
             <span className="text-gray-500 font-bold">Continue As Guest</span>
          </CustomButton>
        </div>

        {/* 5. Footer Link */}
        <p className="text-center mt-8 mb-4 text-gray-500 text-[14px]">
          Already have an account? <Link href="/login" className="font-bold text-black hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}