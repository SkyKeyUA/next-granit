import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const isDesktop = useMediaQuery({ minWidth: 991.98 });
  const isTablet = useMediaQuery({ maxWidth: 991.98 });
  const isMobile = useMediaQuery({ maxWidth: 767.98 });
  const isMobileSmall = useMediaQuery({ maxWidth: 479.98 });

  const Desktop: React.FC<React.PropsWithChildren> = ({ children }) => {
    return isDesktop ? children : null;
  };
  const Tablet: React.FC<React.PropsWithChildren> = ({ children }) => {
    return isTablet ? children : null;
  };
  const Mobile: React.FC<React.PropsWithChildren> = ({ children }) => {
    return isMobile ? children : null;
  };
  const MobileSmall: React.FC<React.PropsWithChildren> = ({ children }) => {
    return isMobileSmall ? children : null;
  };

  return {
    Desktop,
    Tablet,
    Mobile,
    MobileSmall,
  };
};
