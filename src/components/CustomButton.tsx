// src/components/CustomButton.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'social';
}

export const CustomButton = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
  const baseStyles = "w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-full font-bold transition-all active:scale-95 text-[16px]";
  
  const variants = {
    primary: "bg-[#1a2e05] text-white hover:opacity-90", // Dark Green
    secondary: "bg-[#a3e635] text-[#1a2e05] hover:opacity-90", // Light Green (Apple)
    outline: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50",
    social: "bg-[#f1f5f9]/50 border border-transparent text-gray-800 hover:bg-gray-100"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};