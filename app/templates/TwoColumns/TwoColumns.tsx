import React from 'react';

type TwoColumnsLayoutProps = {
  firstColumn: React.ReactNode;
  secondColumn: React.ReactNode;
};

export const TwoColumnsLayout = (props: TwoColumnsLayoutProps) => {
  return (
    <div className="flex">
      <div className="w-1/6 min-h-screen">
        <div className="p-4">{props.firstColumn}</div>
      </div>
      <div className="flex-1 pt-4 pb-4 pr-4">{props.secondColumn}</div>
    </div>
  );
};
