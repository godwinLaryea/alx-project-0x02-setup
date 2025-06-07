import { type PostProps } from "@/interfaces";
import { IoMdArrowRoundForward } from "react-icons/io";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-sm max-w-xl p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800 capitalize">
        {title}
      </h2>
      
      <p className="text-sm text-gray-600 line-clamp-4">{content}</p>

      <div className="w-[50%]">
        <button className="text-white px-2 py-1 bg-sky-400 rounded-xl mt-2 cursor-pointer hover:bg-sky-600 hover:shadow-lg transition-hover duration-300">
          <a href="#">Read more</a>
          <span className="inline-block align-middle pl-1">
            <IoMdArrowRoundForward />
          </span>
        </button>
      </div>

      <p className="text-gray-400 text-xs self-start">Post Id: {userId}</p>
    </div>
  );
};

export default PostCard;
