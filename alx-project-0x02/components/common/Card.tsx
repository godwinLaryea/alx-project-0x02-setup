import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <section className="px-4">
      <div className="flex gap-4 ">
        <div className="flex flex-col justify-around h-[300px] w-[320px] p-4 rounded-xl shadow-lg cursor-pointer">
          <img src="#" alt={`${title} content image`} />

          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="w-[80%] line-clamp-2">{content}</p>
          </div>

          <button className="text-white bg-sky-400 font-medium w-[60%] px-2 py-1 rounded-lg cursor-pointer hover:underline">
            <a href="#">Click to read more</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card;
