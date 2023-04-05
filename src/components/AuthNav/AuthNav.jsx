import { NavLink } from 'react-router-dom';

//відображається лише коли користувач не увійшов
export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
