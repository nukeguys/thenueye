import Link from 'next/link';

interface IProps {
  topic: string;
  title: string;
  description: string;
  authors: string[];
  publishedOn: string;
  img: string;
  link: string;
}

export default function PostCard({
  topic,
  title,
  description,
  authors,
  publishedOn,
  img,
  link,
}: IProps) {
  return (
    <article className="flex flex-col shadow my-4 w-full">
      <Link href={link}>
        <a className="hover:opacity-75">
          <img className="w-full" src={img} alt={title} />
        </a>
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link href={`topic/${topic}`}>
          <a className="text-blue-700 text-sm font-bold uppercase pb-4">
            {topic}
          </a>
        </Link>
        <Link href={link}>
          <a className="text-3xl font-bold hover:text-gray-700 pb-4">{title}</a>
        </Link>
        <p className="text-sm pb-3">
          By{' '}
          {authors.map((author, index) => (
            <>
              {index !== 0 && ' / '}
              <Link key={author} href={`author/${author}`}>
                <a className="font-semibold hover:text-gray-800">{author}</a>
              </Link>
            </>
          ))}
          , Published on {publishedOn}
        </p>
        <Link href={link}>
          <a>{description}</a>
        </Link>
      </div>
    </article>
  );
}
