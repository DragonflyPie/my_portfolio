interface CubeProps {
  icon: React.ReactElement;
  size?: number;
}

const Cube = ({ icon, size }: CubeProps) => {
  return (
    <div
      className="h-[50px] w-[50px] animate-walk-right"
      style={{
        perspective: "100px",
      }}
    >
      <div
        className="relative h-full w-full hover:animate-lookout"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(-25px)",
        }}
      >
        <div
          style={{
            transform: "rotateY(0deg) translateZ(25px)",
          }}
          className="absolute h-[50px] w-[50px] border border-black bg-gray-400 text-center text-xl"
        >
          front
        </div>
        <div
          style={{
            transform: "rotateY(90deg) translateZ(25px)",
          }}
          className="absolute h-[50px] w-[50px] border-2 border-black text-center text-xl"
        >
          back
        </div>
        <div
          style={{
            transform: "rotateY(180deg) translateZ(25px)",
          }}
          className="absolute h-[50px] w-[50px] border-2 border-black text-center text-xl"
        >
          right
        </div>
        <div
          style={{
            transform: "rotateY(-90deg) translateZ(25px)",
          }}
          className="absolute h-[50px] w-[50px] border-2 border-black text-center text-xl"
        >
          left
        </div>
        <div
          style={{
            transform: "rotateX(90deg) translateZ(25px)",
          }}
          className="absolute h-[50px] w-[50px] border-2 border-black text-center text-xl"
        >
          top
        </div>
        <div
          style={{
            transform: "rotateX(90deg) translateZ(25px)",
          }}
          className="absolute h-[50px] w-[50px] border-2 border-black text-center text-xl"
        >
          bottom
        </div>
      </div>
    </div>
  );
};

export default Cube;
