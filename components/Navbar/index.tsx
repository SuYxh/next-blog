import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './index.module.scss';
import { navs } from './config';

const Footer: NextPage = () => {
  const { pathname } = useRouter();

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
    </div>
  );
};

export default Footer;
