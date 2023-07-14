interface NavLinkProps {
  handleClick: (elementRef: React.RefObject<HTMLDivElement>) => void;
  sectionRef: React.RefObject<HTMLDivElement>;
  value: string;
}
const NavLink = ({ value, sectionRef, handleClick }: NavLinkProps) => {
  return (
    <a
      className="group relative flex cursor-pointer flex-col items-center hover:drop-shadow-dark dark:hover:drop-shadow-light"
      onClick={() => handleClick(sectionRef)}
    >
      {value}
      <span className="absolute -bottom-0.5 block h-px w-full scale-0 bg-blackish transition-all delay-300  duration-200 group-hover:scale-100 dark:bg-white "></span>
      <span className="absolute -bottom-[3px] block h-1 w-1 rounded-full bg-blackish opacity-0 group-hover:animate-pulse-once  dark:bg-white   "></span>
    </a>
  );
};

export default NavLink;
