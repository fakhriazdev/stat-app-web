'use client';

import { RootState } from '@/app/lib/store';
import { ThemeProvider } from 'next-themes';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

type Props = { children: string | React.JSX.Element | React.JSX.Element[] };

const Provider = ({ children }: Props) => {
  const { isLoading, error } = useSelector((state: RootState) => state.ui); // Destructuring isLoading and error from state.ui
  console.log('isLoading:', isLoading);
  console.log('error:', error);
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
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
