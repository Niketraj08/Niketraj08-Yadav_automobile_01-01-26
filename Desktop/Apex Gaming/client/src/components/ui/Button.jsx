import { Link } from 'react-router-dom';

export default function Button({ children, variant = 'primary', to, href, className = '', ...props }) {
  const cls = `btn btn-${variant} ${className}`;

  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}
