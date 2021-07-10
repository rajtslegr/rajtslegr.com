import NavLink from '@/components/ui/NavLink';
import useOnTop from '@/hooks/useOnTop';
import { useTheme } from 'next-themes';
import ThemeButton from './ThemeButton';

const NavBar: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const onTop = useOnTop();

  return (
    <nav
      className={`header sticky top-0 z-10 dark:border-b dark:border-gray-200 dark:border-opacity-20 ${
        !onTop ? 'shadow' : 'border-b border-gray-200'
      } transition-shadow`}
    >
      <div className="container flex items-center justify-between h-full max-w-4xl px-4 mx-auto">
        <ul>
          <li className="space-x-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
        <ThemeButton
          handleClick={() =>
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
          }
        />
      </div>
    </nav>
  );
};

export default NavBar;