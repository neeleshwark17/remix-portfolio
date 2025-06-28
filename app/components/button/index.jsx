import React from 'react';

export const Button = ({
  children,
  onClick,
  secondary = false,
  icon,
  iconEnd,
  iconOnly = false,
  loading = false,
  ...props
}) => {
  const baseStyles = {
    padding: iconOnly ? '8px' : '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '16px',
    transition: 'all 0.2s ease',
    backgroundColor: secondary ? '#e0e0e0' : '#007bff',
    color: secondary ? '#333' : '#fff',
  };

  return (
    <button
      style={baseStyles}
      onClick={onClick}
      disabled={loading}
      {...props}
    >
      {icon && !iconOnly && <span>{icon}</span>}
      {iconOnly && <span>{icon}</span>}
      {!iconOnly && children}
      {iconEnd && !iconOnly && <span>{iconEnd}</span>}
      {loading && <span>Loading...</span>}
    </button>
  );
}; 