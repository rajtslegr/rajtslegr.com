import { MouseEventHandler } from 'react';

import { useTheme } from 'next-themes';

import ThemeButton from '@/components/buttons/ThemeButton';
import ExternalLink from '@/components/navigation/ExternalLink';
import NavigationButton from '@/components/navigation/NavigationButton';
import NavLink from '@/components/navigation/NavLink';

interface NavBarProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  showMobileNavigation: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  showMobileNavigation,
  handleClick,
}) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className="header sticky top-0 z-10 motion-safe:transition-shadow">
      <div className="container mx-auto flex h-full max-w-4xl items-center justify-between px-4 sm:pl-2">
        <div className="sm:hidden">
          <NavigationButton
            showMobileNavigation={showMobileNavigation}
            handleClick={handleClick}
          />
        </div>
        <div className="hidden h-full sm:block">
          <NavLink href="/" isHeader={true}>
            Home
          </NavLink>
          <NavLink href="/dashboard" isHeader={true}>
            Dashboard
          </NavLink>
          <NavLink href="/projects" isHeader={true}>
            Projects
          </NavLink>
          <NavLink href="/blog" isHeader={true}>
            Blog
          </NavLink>
          <NavLink href="/contact" isHeader={true}>
            Contact
          </NavLink>
        </div>
        <ExternalLink href="https://vshymanskyy.github.io/StandWithUkraine">
          #StandWithUkraine πΊπ¦
        </ExternalLink>
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
