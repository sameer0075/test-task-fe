import { FC, ReactNode } from 'react';
import Sidebar from '../Sidebar';
import DashboardLayoutRoot from './DashboardLayoutRoot';
import DashboardLayoutWrapper from './DashboardLayoutWrapper';
import DashboardLayoutContainer from './DashboardLayoutContainer';
import DashboardLayoutContent from './DashboardLayoutContent';

interface DashboardLayoutProps {
  children?: ReactNode;
}

/**
 * The DashboardLayout component is a wrapper component that provides a default layout
 * for dashboard pages. It renders a sidebar, a container for the content, and a root
 * element for the layout.
 *
 * @param {DashboardLayoutProps} props - The props object containing the optional children prop.
 * @returns {JSX.Element} The rendered DashboardLayout component.
 */
const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  /**
   * Render the DashboardLayout component.
   *
   * @return {JSX.Element} The rendered DashboardLayout component.
   */
  return (
    // Render the root element for the layout
    <DashboardLayoutRoot>
      {/* Render the sidebar component */}
      <Sidebar />
      {/* Render the wrapper component */}
      <DashboardLayoutWrapper>
        {/* Render the container component */}
        <DashboardLayoutContainer>
          {/* Render the content component */}
          <DashboardLayoutContent>
            {/* Render the children components */}
            {children}
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
