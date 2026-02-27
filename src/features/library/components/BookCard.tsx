import { BookOpenText, Play, Star, StarOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { formatRelativeTime } from '@/lib/time-ago';
import { normalizeAuthors } from '@/lib/normalize-authors';

import type { UserBook } from '../types/book';

interface Props {
  userBook: UserBook;
}

export const BookCard = ({ userBook }: Props) => {
  const navigate = useNavigate();
  const book = userBook.book;
  const lastRead = formatRelativeTime(userBook.lastReadAt);
  const authors = normalizeAuthors(book.author) || book.author;

  return (
    <div className="group bg-card border-muted hover:border-primary/50 hover:shadow-primary/5 relative transform overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative overflow-hidden">
        <img
          className="aspect-auto h-full w-full scale-90 object-cover transition-transform duration-500 group-hover:scale-100"
          data-alt={book.title}
          src={book.coverUrl}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            className="bg-primary text-background flex cursor-pointer items-center justify-center gap-2 rounded-lg py-2 text-sm font-bold shadow-lg"
            onClick={() => navigate(`/reader/${book.id}`)}
          >
            {lastRead ? (
              <>
                <Play size={14} />
                Continue
              </>
            ) : (
              <>
                <BookOpenText size={16} />
                Start reading
              </>
            )}
          </button>
        </div>
        <button className="text-primary bg-background/60 hover:bg-background/80 absolute top-3 right-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full shadow-sm backdrop-blur-md transition-colors">
          {userBook.isFavorite ? <StarOff size={14} /> : <Star size={14} />}
        </button>
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-background text-ssm rounded px-2 py-1 font-black tracking-wider uppercase shadow-sm">
            {userBook.status}
          </span>
        </div>
      </div>
      <div className="space-y-1 p-4">
        <h3 className="text-foreground line-clamp-1 text-sm font-bold">
          {book.title}
        </h3>
        <p className="text-foreground line-clamp-1 text-xs font-medium">
          {authors}
        </p>
        <div className="text-foreground text-ssm mt-3 flex items-center justify-between font-semibold tracking-tight uppercase">
          {lastRead ? <span>Last read: {lastRead}</span> : null}
          <span className="text-primary font-bold">64%</span>
        </div>
      </div>
      {/* Progress bar */}
      <div className="bg-muted h-1 w-full overflow-hidden">
        <div className="bg-primary h-full w-2/3"></div>
      </div>
    </div>
  );
};
