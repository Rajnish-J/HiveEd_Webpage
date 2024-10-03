import { Link } from "react-router-dom";

const Button = ({ children, to, type, onClick, hover, disabled }) => {
  const base = "rounded-full px-4 py-2 md:px-6 cursor-pointer";
  const buttonHover = "transition-transform hover:scale-125";

  const styles = {
    primary: base + " bg-[#be34e5] text-white",
    secondary: base + " text-green-400 border-green-400 border",
    gray: base + " border-gray-400 border",
  };

  if (to)
    return (
      <Link className={`inline-block ${styles[type]} ${buttonHover}`} to={to}>
        {children}
      </Link>
    );

  if (hover)
    return (
      <button className={`${styles[type]} ${buttonHover}`}>{children}</button>
    );

  if (disabled) {
    return (
      <button type="submit" disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button type="submit" className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
