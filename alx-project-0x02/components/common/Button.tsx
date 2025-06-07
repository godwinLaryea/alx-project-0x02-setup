import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape, title }) => {
  return (
    <div>
      <button
        className={`${size} ${shape} bg-sky-400 hover:bg-sky-400 py-1 px-2 shadow-sm capitalize text-white
           shadow-sky-500 focus:ring-2 focus: ring-sky-700 cursor-pointer transition-colors`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
