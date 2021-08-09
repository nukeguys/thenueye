import Link from 'next/link';

import { Author, Topic } from '../type';

interface IProps {
  topic: Topic;
  title: string;
  description: string;
  authors: Author[];
  publishedOn: string;
  img: string;
  id: string;
}

export default function PostCard({
  topic,
  title,
  description,
  authors,
  publishedOn,
  img,
  id,
}: IProps) {
  return (
    <article className="flex flex-col shadow my-4 w-full">
      <Link href={`post/${id}`}>
        <a className="hover:opacity-75">
          <img className="w-full" src={img} alt={title} />
        </a>
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link href={`topic/${topic.id}`}>
          <a className="text-blue-700 text-sm font-bold uppercase pb-4">
            {topic.name}
          </a>
        </Link>
        <Link href={`post/${id}`}>
          <a className="text-3xl font-bold hover:text-gray-700 pb-4">{title}</a>
        </Link>
        <p className="text-sm pb-3">
          By{' '}
          {authors.map((author, index) => (
            <>
              {index !== 0 && ' / '}
              <Link key={author.id} href={`author/${author.id}`}>
                <a className="font-semibold hover:text-gray-800">
                  {author.name}
                </a>
              </Link>
            </>
          ))}
          , Published on {publishedOn}
        </p>
        <Link href={`post/${id}`}>
          <a>{description}</a>
        </Link>
      </div>
    </article>
  );
}
