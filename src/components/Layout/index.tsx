import { Toaster } from 'react-hot-toast';
import { TwoColumnsLayout } from '../../templates/TwoColumns';
import Sidebar from '../Sidebar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
        }}
      />
      <div className="text-foreground bg-background min-h-screen w-full">
        <TwoColumnsLayout
          firstColumn={<Sidebar />}
          secondColumn={<main>{children}</main>}
        />
      </div>
    </>
  );
};
