import { useRouter } from 'next/router';

import { Meta } from '../../layout/Meta';
import { Main } from '../../main';

export default function Author() {
  const router = useRouter();
  const { author: id } = router.query;

  return (
    <Main meta={<Meta title={id as string} description={id as string} />}>
      {id}
    </Main>
  );
}
