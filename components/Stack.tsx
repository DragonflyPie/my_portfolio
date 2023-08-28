import {
  DjangoIcon,
  JavascriptIcon,
  NextIcon,
  NodeJSIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  TypescriptIcon,
} from "./StackIcons";
import IconWrapper from "./IconWrapper";

const Stack = () => {
  return (
    <div className="flex w-full flex-col border-b border-black dark:border-white md:order-2 md:min-w-[400px] ">
      <div className="flex justify-center pr-3">
        <IconWrapper title="NextJS" size="sm">
          <NextIcon />
        </IconWrapper>
      </div>
      <div className="-mt-px flex items-end justify-center gap-1 pl-2">
        <IconWrapper size="sm" title="Tailwind">
          <TailwindIcon />
        </IconWrapper>
        <IconWrapper title="Typescript">
          <TypescriptIcon />
        </IconWrapper>
        <IconWrapper title="Redux">
          <ReduxIcon />
        </IconWrapper>
        <IconWrapper size="sm" title="Sass">
          <SassIcon />
        </IconWrapper>
      </div>
      <div className=" -mb-px -mt-px flex items-end justify-center gap-px">
        <IconWrapper title="NodeJS">
          <NodeJSIcon />
        </IconWrapper>
        <IconWrapper size="lg" title="Javascript">
          <JavascriptIcon />
        </IconWrapper>
        <IconWrapper size="lg" title="React">
          <ReactIcon />
        </IconWrapper>
        <div className="relative flex flex-col -space-y-px pl-3 ">
          <div className="absolute bottom-full right-2">
            <IconWrapper size="sm-extrapixel" title="Django">
              <DjangoIcon />
            </IconWrapper>
          </div>
          <IconWrapper size="sm" title="Python">
            <PythonIcon />
          </IconWrapper>
        </div>
      </div>

      <div className="flex"></div>
    </div>
  );
};

export default Stack;
