import { ReactNode, useState } from 'react';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  topics?: string[];
};

const Main = ({ meta, children, topics }: IMainProps) => {
  const [topicOpened, openTopic] = useState(false);
  return (
    <div className="antialiased w-full">
      {meta}
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <Link href="/">
            <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl">
              {AppConfig.title}
            </a>
          </Link>
          <p className="text-lg text-gray-600 text-center mx-2">
            {AppConfig.description}
          </p>
        </div>
      </header>

      {!!topics?.length && (
        <nav className="w-full py-2 border-t border-b bg-gray-100 overflow-x-auto hide-scroll">
          <div className="block sm:hidden">
            <button
              type="button"
              className="md:hidden text-base font-bold uppercase text-center flex justify-center items-center mx-auto"
              onClick={() => openTopic((opened) => !opened)}
            >
              Topics{' '}
              <FontAwesomeIcon
                className="ml-2"
                icon={topicOpened ? faChevronUp : faChevronDown}
                size="1x"
              />
            </button>
          </div>
          <div
            className={`${
              topicOpened ? 'block' : 'hidden'
            } w-full flex-grow sm:flex sm:items-center sm:w-auto`}
          >
            <div className="w-max-full mx-auto flex flex-col sm:flex-row items-center text-sm font-bold uppercase mt-0 py-2 overflow-x-auto hide-scrollbar">
              {topics.map((topic) => (
                <Link key={topic} href={`${topic}`}>
                  <a className="hover:bg-gray-400 rounded py-1 px-4 mx-2">
                    {topic}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
      <div className="max-w-screen-lg mx-auto">
        <div className="py-5 text-xl content">{children}</div>
      </div>
      <footer className="w-full border-t bg-white py-12">
        <div className="w-full container mx-auto flex flex-col items-center">
          <div className="uppercase">
            &copy; {new Date().getFullYear()} {AppConfig.title}.
          </div>
        </div>
      </footer>
    </div>
  );
};

export { Main };
