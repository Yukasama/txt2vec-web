'use client';

import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '../../components/ui/button';

export const ThemeToggle = ({
  className,
}: Readonly<React.HTMLAttributes<HTMLButtonElement>>) => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  const isLight = theme === 'light';

  return (
    <Button
      aria-label="Toggle theme"
      className={cn(className)}
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      size="icon"
      variant="ghost"
    >
      {isLight ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
};
