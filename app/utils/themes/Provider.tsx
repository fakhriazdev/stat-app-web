'use client';

import { RootState } from '@/app/lib/store';
import { ThemeProvider } from 'next-themes';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { redirect } from 'next/navigation'


type Props = { children: string | React.JSX.Element | React.JSX.Element[] };

const Provider = ({ children }: Props) => {

  const { isLoading, message } = useSelector((state: RootState) => state.ui);
  const { isLogin } = useSelector((state: RootState) => state.auth);
  console.log('isLoading:', isLoading);
  console.log('message:', message);
  console.log('login:', isLogin);
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
      {children}
    </ThemeProvider>
  );
};
export default Provider;
