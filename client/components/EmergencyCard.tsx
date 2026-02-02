import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EmergencyCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  number: string;
  color: 'red' | 'blue' | 'green' | 'orange';
  onClick: () => void;
}

const colorClasses = {
  red: 'bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-300 hover:shadow-lg',
  blue: 'bg-blue-50 border-blue-200 hover:bg-blue-100 hover:border-blue-300 hover:shadow-lg',
  green: 'bg-green-50 border-green-200 hover:bg-green-100 hover:border-green-300 hover:shadow-lg',
  orange: 'bg-orange-50 border-orange-200 hover:bg-orange-100 hover:border-orange-300 hover:shadow-lg',
};

const iconColorClasses = {
  red: 'text-red-600',
  blue: 'text-blue-600',
  green: 'text-green-600',
  orange: 'text-orange-600',
};

export default function EmergencyCard({
  icon,
  title,
  description,
  number,
  color,
  onClick,
}: EmergencyCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'p-6 rounded-xl border-2 transition-all duration-200 text-left group cursor-pointer',
        colorClasses[color]
      )}
    >
      <div className={cn('text-3xl mb-3 transition-transform group-hover:scale-110', iconColorClasses[color])}>
        {icon}
      </div>
      <h3 className="font-bold text-lg text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-foreground">{number}</span>
        <span className="text-xs font-medium text-muted-foreground group-hover:translate-x-1 transition-transform">
          Call →
        </span>
      </div>
    </button>
  );
}
