import styles from './index.module.scss';

interface IProps {
  isShow: boolean;
  onClose: Function;
}

const Login = (props: IProps) => {
  const { isShow = false } = props;

  return isShow ? <div className={styles.loginArea}></div> : null;
};

export default Login;
