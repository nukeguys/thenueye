import { Meta } from '../../layout/Meta';
import { Main } from '../../main';

export default function OneHitWonders() {
  return (
    <Main
      hideHeader
      hideFooter
      fullWidth
      meta={
        <Meta
          title="One-Hit Wonders in Sports"
          description="The greatest single-season anomalies in the last 30 years"
        />
      }
    >
      One-Hit Wonders in Sports
    </Main>
  );
}
