type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={`rounded-xl border bg-white dark:bg-gray-900 dark:text-gray-100 shadow ${className}`}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return (
    <div
      className={`border-b px-4 py-2 bg-gray-50 dark:bg-gray-800 ${className}`}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return (
    <div className={`p-4 ${className}`} {...props} />
  );
}

export function CardTitle({ className, ...props }: CardProps) {
  return (
    <h3
      className={`text-lg font-semibold ${className}`}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: CardProps) {
  return (
    <p
      className={`text-sm ${className}`}
      {...props}
    />
  );
}
