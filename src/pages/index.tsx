import { Meta } from '../layout/Meta';
import { Main } from '../main';
import PostCard from '../main/PostCard';
import { Post } from '../type';

const POSTS_SAMPLE: Post[] = [
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
    topic: { id: 'technology', name: 'Technology' },
    title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
  porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis
  dui porta volutpat. In sit amet posuere magna..`,
    authors: [
      { id: 'david-grzyb', name: 'David Grzyb' },
      { id: 'mark', name: 'Mark' },
    ],
    publishedOn: 'April 25th, 2020',
    img: 'https://source.unsplash.com/collection/1346951/1000x500?sig=1',
    id: 'lorem-ipsum',
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
        {POSTS_SAMPLE.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </section>
    </Main>
  );
};

export default Index;
