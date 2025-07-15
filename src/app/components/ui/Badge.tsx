type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline" | "secondary";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-100",
    outline:
      "border border-gray-300 dark:border-gray-600",
    secondary:
      "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
