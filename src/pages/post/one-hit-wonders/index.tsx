import { Meta } from '../../../layout/Meta';
import { Main } from '../../../main';
import Content from './Content';
import Header from './Header';
import Intro from './Intro';

export default function OneHitWonders() {
  return (
    <Main
      hideHeader
      fullWidth
      meta={
        <Meta
          title="One-Hit Wonders in Sports"
          description="The greatest single-season anomalies in the last 30 years"
        />
      }
    >
      <div className="px-4">
        <Header />
        <Intro />
        <Content />
      </div>
    </Main>
  );
}
