type AudioProps = {
  className?: string;
  onClick?: () => void;
}
const Audio = (props: AudioProps) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle opacity={0.25} cx={24} cy={24} r={24} fill="#A445ED" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 18V31L32 24.5L19 18Z"
      fill="#A445ED"
    />
  </svg>
);
export default Audio;
