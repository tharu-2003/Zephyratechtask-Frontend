"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { Mail, Lock, EyeOff, Eye, Loader2 } from "lucide-react";
import { CustomButton } from "@/components/CustomButton";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await api.post("/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      alert("Login Successful! 🎉");
      router.push("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f2f5] p-4">
      <div className="w-full max-w-sm bg-white rounded-[32px] px-7 py-8 shadow-lg">

        <h1 className="text-[26px] font-bold text-center text-[#1a2e05] mb-7">Login</h1>

        {error && <p className="text-red-500 text-sm text-center mb-3 font-medium">{error}</p>}

        <form className="space-y-3" onSubmit={handleLogin}>
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 size-4" />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#a3e635] placeholder:text-gray-300"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 size-4" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-11 pr-11 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#a3e635] placeholder:text-gray-300"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword
                ? <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 size-4" />
                : <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 size-4" />
              }
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-center pt-1">
            <Link href="#" className="text-sm text-gray-500 underline underline-offset-2">
              Forgot Password?
            </Link>
          </div>

          <CustomButton variant="primary" type="submit" disabled={loading} className="mt-1">
            {loading ? <Loader2 className="animate-spin size-5" /> : "Login"}
          </CustomButton>
        </form>

        {/* Divider */}
        <div className="relative my-5 text-center">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-100" />
          </div>
          <span className="relative bg-white px-4 text-gray-400 text-sm">or</span>
        </div>

        {/* Social Buttons */}
        <div className="space-y-2">
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
          Need an account?{" "}
          <Link href="/" className="font-bold text-black hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}