import { ExternalLink } from "./Icons";

interface LinkProps {
  url: string;
  value: string;
}

const ProjectLink = ({ url, value }: LinkProps) => {
  return (
    <a
      href={url}
      className="group relative flex items-center justify-center gap-1 text-link-light transition-all transition-colors hover:text-link-dark"
    >
      <p>{value}</p>
      <ExternalLink />
      <span className="absolute -bottom-0.5 block h-px w-full scale-0 bg-link-dark transition-all delay-300  duration-200 group-hover:scale-100 "></span>
      <span className="absolute -bottom-[3px] block h-1 w-1 rounded-full bg-link-dark opacity-0 group-hover:animate-pulse-once  "></span>
    </a>
  );
};

export default ProjectLink;
