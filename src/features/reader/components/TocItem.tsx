import { useParams } from 'react-router-dom';
import { readerStore } from '@/store/reader';

export const TocItem = ({
  item,
  index,
  depth = 0,
  currentFileInSpine,
  onJumpToChapter,
  getChapterByHref,
  getChapterTitle,
}: any) => {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;
  const normalizedChapterHref = item.href.split('#')[0].replace(/^\.\.\//, '');

  const isActive = normalizedChapterHref === currentFileInSpine;

  const jumpToChapterAndLocalSave = (href: number, id: string) => {
    readerStore.setState((state) => {
      const newProgress = { ...state.progress };
      newProgress[id] = getChapterByHref(href);
      return { progress: newProgress };
    });
    onJumpToChapter(href);
  };

  return (
    <li>
      <button
        onClick={() => jumpToChapterAndLocalSave(item.href, id)}
        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
          isActive
            ? 'text-foreground border-primary bg-primary/10 border-l-[3px] font-bold shadow-sm'
            : 'text-foreground hover:bg-primary/10 opacity-80'
        }`}
        style={{ paddingLeft: `${depth * 12 + 12}px` }}
      >
        {depth === 0 && (
          <span className="text-ssm w-4 font-serif opacity-60">
            {(index + 1).toString().padStart(2, '0')}
          </span>
        )}

        <span className="truncate">{getChapterTitle(item.title)}</span>
      </button>
      {item.children && item.children.length > 0 && (
        <ul className="mt-1 space-y-1">
          {item.children.map((child: any, childIndex: number) => (
            <TocItem
              key={`${item.href}-${childIndex}`}
              item={child}
              index={childIndex}
              depth={depth + 1}
              currentFileInSpine={currentFileInSpine}
              onJumpToChapter={onJumpToChapter}
              getChapterTitle={getChapterTitle}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
