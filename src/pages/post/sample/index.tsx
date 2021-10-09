import { Meta } from '../../../layout/Meta';
import { Main } from '../../../main';

export default function Sample() {
  return (
    <Main
      hideHeader
      fullWidth
      meta={<Meta title="Sample" description="Sample Post" />}
    >
      <div className="px-4">This is Sample Post</div>
    </Main>
  );
}
