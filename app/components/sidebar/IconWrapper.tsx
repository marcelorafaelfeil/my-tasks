import { cn } from '@nextui-org/react';
import React from 'react';

type IconWrapperProps = { children: React.ReactNode; className: string };

export default function IconWrapper({ children, className }: IconWrapperProps) {
  return (
    <div
      className={cn(
        className,
        'flex items-center rounded-small justify-center w-7 h-7',
      )}
    >
      {children}
    </div>
  );
}
