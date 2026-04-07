"use client";
import { Mail, Lock, EyeOff } from "lucide-react";
import { CustomButton } from "@/components/CustomButton";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f2f5] p-4">
      {/* Mobile-like Container */}
      <div className="w-full max-w-100 bg-white rounded-[45px] p-8 shadow-xl overflow-hidden">
        
        <h1 className="text-[32px] font-bold text-center mt-6 mb-10 text-[#1a2e05]">Login</h1>

        <form className="space-y-4">
          {/* Email Input */}
          <div className="relative group">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full pl-14 pr-4 py-4 bg-[#f8f9fa] border-none rounded-2xl focus:ring-2 focus:ring-[#a3e635] outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Password Input */}
          <div className="relative group">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full pl-14 pr-14 py-4 bg-[#f8f9fa] border-none rounded-2xl focus:ring-2 focus:ring-[#a3e635] outline-none text-gray-700 placeholder:text-gray-400"
            />
            <EyeOff className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 size-5 cursor-pointer" />
          </div>

          <div className="text-right">
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
                Forgot Password?
            </Link>
          </div>

          <CustomButton variant="primary" className="mt-4">Login</CustomButton>
        </form>

        <div className="relative my-10 text-center">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-100"></span>
            </div>
            <span className="relative bg-white px-4 text-gray-400 text-sm">or</span>
        </div>

        <div className="space-y-3">
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

        <p className="text-center mt-10 mb-4 text-gray-600 text-[15px]">
          Need an account? <Link href="#" className="font-bold text-black hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}