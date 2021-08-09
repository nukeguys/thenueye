import { useRouter } from 'next/router';

interface IProps {
  curIndex: number;
  items: Array<{ league: string; img: string; color: string }>;
  onClick: (index: number) => void;
}

export default function Nav({ curIndex, items, onClick }: IProps) {
  const router = useRouter();

  return (
    <nav className="sticky top-0 py-3 border-b-2 overflow-hidden bg-white z-10">
      <ul
        className="flex transition-transform duration-300"
        style={{
          marginLeft: '50%',
          transform: `translateX(${-80 * curIndex}px)`,
        }}
      >
        {items?.map((item, index) => (
          <li
            key={item.league}
            className="w-16 mx-2 flex-none -translate-x-1/2"
            style={{ opacity: 1 - Math.abs(curIndex - index) * 0.2 }}
          >
            <button type="button" onClick={() => onClick(index)}>
              <div
                className="rounded-full"
                style={{ backgroundColor: item.color }}
              >
                <img
                  src={`${router.basePath}/assets/one-hit-wonders/${item.img}`}
                  alt={item.league}
                />
              </div>
              <p className="text-sm text-center font-bold uppercase">
                {item.league}
              </p>
            </button>
          </li>
        ))}
      </ul>
      <div
        className="absolute w-full h-full bottom-0 pointer-events-none -left-3/4"
        style={{
          background:
            'linear-gradient(to left,rgba(255,255,255,0) 0,#fff 25%,#fff 100%)',
        }}
      />
      <div
        className="absolute w-full h-full bottom-0 pointer-events-none -right-1/2"
        style={{
          background:
            'linear-gradient(to right,rgba(255,255,255,0) 0,#fff 25%,#fff 100%)',
        }}
      />
    </nav>
  );
}
