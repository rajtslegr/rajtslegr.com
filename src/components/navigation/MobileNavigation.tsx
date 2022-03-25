import MotionSection from '../layout/MotionSection';
import NavLink from './NavLink';

const MobileNavigation: React.FC = () => (
  <MotionSection className="flex absolute z-10 justify-center w-full h-full bg-gray-50 dark:bg-dark">
    <div className="flex flex-col mt-24 space-y-4 text-center">
      <MotionSection>
        <NavLink href="/" isMobileNavigation>
          Home
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.1}>
        <NavLink href="/dashboard" isMobileNavigation>
          Dashboard
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.2}>
        <NavLink href="/projects" isMobileNavigation>
          Projects
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.3}>
        <NavLink href="/blog" isMobileNavigation>
          Blog
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.4}>
        <NavLink href="/contact" isMobileNavigation>
          Contact
        </NavLink>
      </MotionSection>
    </div>
  </MotionSection>
);

export default MobileNavigation;
