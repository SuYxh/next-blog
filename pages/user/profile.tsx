import type { NextPage } from 'next';
import { observer } from 'mobx-react-lite';

const UserProfile: NextPage = () => {
  return (
    <div>
      <p>我是 UserProfile</p>
    </div>
  );
};

export default observer(UserProfile);
