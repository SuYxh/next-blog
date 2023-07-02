import type { NextPage } from 'next';
import { useState } from 'react';
import { Button, Avatar, Dropdown, Menu, message } from 'antd';
import { LoginOutlined, HomeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './index.module.scss';
import { navs } from './config';
import Login from 'components/Login';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store/index';
import request from 'service/fetch';

const Navbar: NextPage = () => {
  const store = useStore();
  const { userId, avatar } = store.user?.userInfo ?? {};
  const { pathname, push } = useRouter();
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleGotoEditorPage = () => {
    console.log('handleGotoEditorPage');
    if (userId) {
      push('/editor/new');
    } else {
      message.warning('请先登录');
    }
  };

  const handleLogin = () => {
    setIsShowLogin(true);
  };

  const handleClose = () => {
    setIsShowLogin(false);
  };

  const handleGotoPersonalPage = () => {
    console.log('handleGotoPersonalPage');
  };

  const handleLogout = () => {
    console.log('handleLogout');
    request.post('/api/user/logout').then((res: any) => {
      if (res?.code === 0) {
        store.user.setUserInfo({});
      }
    });
  };

  const renderDropDownMenu = () => {
    return (
      <Menu>
        <Menu.Item onClick={handleGotoPersonalPage}>
          <HomeOutlined />
          &nbsp; 个人主页
        </Menu.Item>
        <Menu.Item onClick={handleLogout}>
          <LoginOutlined />
          &nbsp; 退出系统
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <div className={styles.navbar}>
      <section className={styles.logArea}>Blog-X</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => (
          <Link key={nav?.label} href={nav?.value}>
            <a className={pathname === nav?.value ? styles.active : ''}>
              {nav?.label}
            </a>
          </Link>
        ))}
      </section>

      <section className={styles.operationArea}>
        <Button onClick={handleGotoEditorPage}>写文章</Button>

        {userId ? (
          <>
            <Dropdown overlay={renderDropDownMenu()} placement="bottomLeft">
              <Avatar src={avatar} size={32} />
            </Dropdown>
          </>
        ) : (
          <Button type="primary" onClick={handleLogin}>
            登录
          </Button>
        )}

        <Login isShow={isShowLogin} onClose={handleClose} />
      </section>
    </div>
  );
};

// export default Navbar;

export default observer(Navbar);
