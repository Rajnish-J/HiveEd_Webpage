import { Link } from "react-router-dom";

const Button = ({ children, to, type, onClick }) => {
  const base = "rounded-full px-4 py-2 cursor-pointer";

  const styles = {
    primary: base + " bg-[#be34e5] text-white",
    secondary: base + " text-green-400 border-green-400 border",
    gray: base + " border-gray-400 border",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return <button className={styles[type]}>{children}</button>;
};

export default Button;
