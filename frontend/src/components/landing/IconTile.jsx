export const IconTile = ({ icon: Icon, size = "md", className = "" }) => (
  <span className={`icon-tile icon-tile-${size} ${className}`} aria-hidden>
    <Icon size={size === "sm" ? 16 : 19} strokeWidth={1.7} />
  </span>
);
