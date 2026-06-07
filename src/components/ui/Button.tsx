import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        variant === 'primary' ? 'btn-primary' : 'btn-outline',
        'hoverable',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
