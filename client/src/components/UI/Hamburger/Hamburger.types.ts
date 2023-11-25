export type HamburgerProps = {
  setMenuOpen: (value: React.SetStateAction<boolean>) => void;
  menuOpen: boolean;
  setCategoryToggle: (value: React.SetStateAction<boolean>) => void;
};
