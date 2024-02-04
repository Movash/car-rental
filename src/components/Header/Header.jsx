import { NavLink } from 'react-router-dom';
import { Nav } from './Header.styled';

const Header = () => {
  return (
    <Nav>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="catalog">Catalog</NavLink>
        <NavLink to="favorites">Favorites</NavLink>
      </div>
    </Nav>
  );
};

export default Header;
