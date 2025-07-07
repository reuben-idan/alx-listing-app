export interface CardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  location: string;
  onAction?: () => void;
  actionLabel?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
}
