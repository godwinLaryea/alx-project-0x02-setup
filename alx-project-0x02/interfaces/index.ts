
export interface CardProps {
  title: string;
  content: string;
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostProps) => void;
}