"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { Mail, Lock, EyeOff, Loader2 } from "lucide-react";
import { CustomButton } from "@/components/CustomButton";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Send login request to backend API
      const response = await api.post("/api/auth/login", { email, password });
      
      // Store the authentication token in local storage
      localStorage.setItem("token", response.data.token);
      
      alert("Login Successful! 🎉");
      
      // Redirect user to the home page on success
      router.push("/");
      
    } catch (err: any) {
      // Set error message from API response or default to generic message
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f2f5] p-4">
      <div className="w-full max-w-100 bg-white rounded-[45px] p-8 shadow-xl overflow-hidden">
        
        <h1 className="text-[32px] font-bold text-center mt-6 mb-10 text-[#1a2e05]">Login</h1>

        {/* Display Error Message */}
        {error && <p className="text-red-500 text-sm text-center mb-4 font-medium">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin}> 
          <div className="relative group">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
            <input 
              type="email" 
              placeholder="Email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-14 pr-4 py-4 bg-[#f8f9fa] border-none rounded-2xl focus:ring-2 focus:ring-[#a3e635] outline-none"
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
            <input 
              type="password" 
              placeholder="Password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-14 pr-14 py-4 bg-[#f8f9fa] border-none rounded-2xl focus:ring-2 focus:ring-[#a3e635] outline-none"
            />
            <EyeOff className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 size-5 cursor-pointer" />
          </div>

          <div className="text-right">
            <Link href="#" className="text-sm font-medium text-gray-500 underline">Forgot Password?</Link>
          </div>

          <CustomButton variant="primary" className="mt-4" type="submit" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : "Login"}
          </CustomButton>
        </form>

        <div className="relative my-10 text-center">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-100"></span>
            </div>
            <span className="relative bg-white px-4 text-gray-400 text-sm">or</span>
        </div>

        <div className="space-y-3">
          {/* Social Login Options */}
          <CustomButton variant="social">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </CustomButton>

          <CustomButton variant="secondary">
            <img src="https://www.svgrepo.com/show/303108/apple-black-logo.svg" alt="Apple" className="w-5 h-5" />
            Continue with Apple
          </CustomButton>
        </div>

        <p className="text-center mt-10 mb-4 text-gray-600 text-[15px]">
          Need an account? <Link href="#" className="font-bold text-black hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}