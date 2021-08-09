import { Meta } from '../layout/Meta';
import { Main } from '../main';
import PostCard from '../main/PostCard';
import { Post } from '../type';

const POSTS: Post[] = [
  {
    topic: { id: 'sports', name: 'Sports' },
    title: 'One-Hit Wonders in Sports',
    description: `The greatest single-season anomalies in the last 30 years`,
    authors: [{ id: 'kim', name: 'Kim' }],
    publishedOn: 'April 25th, 2020',
    img: 'https://pudding.cool/common/assets/thumbnails/640/2018_04_one-hit-wonders.jpg',
    id: 'one-hit-wonders',
  },
  {
    topic: { id: 'sports', name: 'Sports' },
    title: 'nike',
    description: `The greatest single-season anomalies in the last 30 years`,
    authors: [{ id: 'kim', name: 'Kim' }],
    publishedOn: 'April 25th, 2020',
    img: 'https://pudding.cool/common/assets/thumbnails/640/2018_04_one-hit-wonders.jpg',
    id: 'nike',
  },
];

const Index = () => {
  return (
    <Main
      meta={<Meta title="The Nueye" description="is a digital publication." />}
      topics={[
        { id: 'technology', name: 'Technology' },
        { id: 'automotive', name: 'Automotive' },
        { id: 'finance', name: 'Finance' },
        { id: 'politics', name: 'Politics' },
        { id: 'culture', name: 'Culture' },
        { id: 'sports', name: 'Sports' },
      ]}
    >
      <section className="flex flex-col items-center px-3">
        {POSTS.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </section>
    </Main>
  );
};

export default Index;
