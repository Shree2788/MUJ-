import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-bold py-3 px-6 rounded-md transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-muj-orange text-white hover:bg-orange-600 focus:ring-orange-500 shadow-lg hover:shadow-xl",
    secondary: "bg-muj-purple text-white hover:bg-purple-800 focus:ring-purple-500 shadow-md",
    outline: "border-2 border-muj-purple text-muj-purple hover:bg-muj-purple hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;