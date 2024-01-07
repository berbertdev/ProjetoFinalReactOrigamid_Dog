import React from 'react';
import styles from './UserHeadre.module.css';
import UserHeaderNav from './UserHeaderNav';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();
  const { pathname } = location;
  React.useEffect(() => {
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste sua foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatisticas');
        break;
      default:
        setTitle('Minha conta');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};
export default UserHeader;
