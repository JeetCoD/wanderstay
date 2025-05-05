// components/Spinner.tsx
import React from "react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  thickness?: "thin" | "regular" | "thick";
  message?: string;
  fullScreen?: boolean;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "primary",
  thickness = "regular",
  message,
  fullScreen = false,
  className = "",
}) => {
  // Size mappings
  const sizeMap = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  // Color mappings
  const colorMap = {
    primary: "border-blue-600",
    secondary: "border-gray-600",
    success: "border-green-500",
    danger: "border-red-500",
    warning: "border-yellow-500",
    info: "border-cyan-500",
    light: "border-gray-300",
    dark: "border-gray-800",
  };

  // Thickness mappings
  const thicknessMap = {
    thin: "border",
    regular: "border-2",
    thick: "border-4",
  };

  // Generate container classes
  const containerClasses = fullScreen
    ? "fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50"
    : "relative flex items-center justify-center";

  // Generate spinner classes
  const spinnerClasses = `
    ${sizeMap[size]}
    ${thicknessMap[thickness]}
    ${colorMap[color]}
    rounded-full
    border-t-transparent
    animate-spin
    ${className}
  `;

  return (
    <div className={containerClasses} role="status" aria-live="polite">
      <div className="flex flex-col items-center">
        <div className={spinnerClasses}></div>
        {message && (
          <span className="mt-2 text-sm text-gray-700">{message}</span>
        )}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
