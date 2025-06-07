import { type PostProps } from "@/interfaces";
import { IoMdArrowRoundForward } from "react-icons/io";

const PostCard: React.FC<PostProps> = ({ id, title, content }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 capitalize">{title}</h2>
      </div>
      <p className="text-gray-600 line-clamp-4">{content}</p>

      <div className="">
        <button className="text-white px-2 py-1 bg-sky-400 rounded-xl mt-2 cursor-pointer hover:bg-sky-600 hover:shadow-lg transition-hover duration-300">
          <a href="#">Read more</a>
          <span className="inline-block align-middle pl-1">
            <IoMdArrowRoundForward />
          </span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
