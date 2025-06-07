import PostCard from "../components/common/PostCard";

export interface CardProps {
  title: string;
  content: string;
}

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}

export interface ButtonProps {
  size: "w-sm" | "w-md" | "w-lg";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  title: "small" | "medium" | "large";
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostProps) => void;
}

export interface PostCardProps {
  userId: number;
  title: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
