export default function NetworkLines() {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
      <line x1="10%" y1="20%" x2="80%" y2="40%" stroke="rgba(0,216,255,0.3)" strokeWidth="1" />

      <line x1="20%" y1="70%" x2="90%" y2="20%" stroke="rgba(124,77,255,0.3)" strokeWidth="1" />

      <line x1="0%" y1="50%" x2="100%" y2="80%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </svg>
  );
}
