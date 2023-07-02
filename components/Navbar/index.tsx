import type { NextPage } from 'next';
import { useState } from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './index.module.scss';
import { navs } from './config';
import Login from 'components/Login';

const Footer: NextPage = () => {
  const { pathname } = useRouter();
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleGotoEditorPage = () => {
    console.log('handleGotoEditorPage');
  };

  const handleLogin = () => {
    setIsShowLogin(true);
  };

  const handleClose = () => {
    setIsShowLogin(false);
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

        <Button type="primary" onClick={handleLogin}>
          登录
        </Button>

        <Login isShow={isShowLogin} onClose={handleClose} />
      </section>
    </div>
  );
};

export default Footer;
