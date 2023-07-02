import type { NextPage } from 'next';
import { observer } from 'mobx-react-lite';

const UserDetail: NextPage = () => {
  return (
    <div>
      <p>我是 UserDetail</p>
    </div>
  );
};

export default observer(UserDetail);
