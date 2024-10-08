'use client';

import { RootState } from '@/app/lib/store';
import { ThemeProvider } from 'next-themes';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { redirect } from 'next/navigation'
import {Toaster} from "react-hot-toast";


type Props = { children: string | React.JSX.Element | React.JSX.Element[] };

const Provider = ({ children }: Props) => {
  const { isLogin } = useSelector((state: RootState) => state.auth);

  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isLogin) {
      redirect('/');
    }

  }, [isLogin]);

  if (!mounted) {
    return <>{children}</>;
  }
  return (
      <ThemeProvider enableSystem={true} attribute="class">
        <div>
          <Toaster
              toastOptions={{
                style: {
                    backgroundColor:'#2D96F3',
                    color:'white',
                  fontSize:14,
                }
              }}
          />
        </div>
        {children}
      </ThemeProvider>
  );
};
export default Provider;
