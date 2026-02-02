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
  red: 'from-red-50 to-red-50/50 border-red-200/60 hover:from-red-100 hover:to-red-50 hover:border-red-300',
  blue: 'from-blue-50 to-blue-50/50 border-blue-200/60 hover:from-blue-100 hover:to-blue-50 hover:border-blue-300',
  green: 'from-green-50 to-green-50/50 border-green-200/60 hover:from-green-100 hover:to-green-50 hover:border-green-300',
  orange: 'from-orange-50 to-orange-50/50 border-orange-200/60 hover:from-orange-100 hover:to-orange-50 hover:border-orange-300',
};

const bgGradients = {
  red: 'bg-gradient-to-br',
  blue: 'bg-gradient-to-br',
  green: 'bg-gradient-to-br',
  orange: 'bg-gradient-to-br',
};

const iconBgClasses = {
  red: 'bg-red-600',
  blue: 'bg-blue-600',
  green: 'bg-green-600',
  orange: 'bg-orange-600',
};

const iconColorClasses = {
  red: 'text-white',
  blue: 'text-white',
  green: 'text-white',
  orange: 'text-white',
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
        'p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 text-left group cursor-pointer overflow-hidden relative',
        bgGradients[color],
        colorClasses[color],
        'hover:shadow-lg hover:-translate-y-1'
      )}
    >
      {/* Background accent */}
      <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{
        background: color === 'red' ? 'rgb(220, 38, 38)' :
                   color === 'blue' ? 'rgb(37, 99, 235)' :
                   color === 'green' ? 'rgb(34, 197, 94)' :
                   'rgb(234, 88, 12)'
      }}></div>

      <div className={cn('text-4xl mb-4 transition-transform group-hover:scale-125 group-hover:rotate-12 w-fit rounded-lg p-3', iconBgClasses[color])}>
        <div className={iconColorClasses[color]}>
          {icon}
        </div>
      </div>
      <h3 className="font-black text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-200/40">
        <span className="text-base sm:text-lg font-black text-foreground">{number}</span>
        <span className="text-xs font-bold text-muted-foreground group-hover:translate-x-2 transition-transform flex items-center gap-1">
          CALL <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </button>
  );
}
