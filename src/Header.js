import './Header.css';

export default function Header () {
    return(
        <header className='header'>
          <div className='header__container'>
            <h1 className='header__logo'><a className='header__link'>Blog</a></h1>
            <a href='' className='header__link'>お問い合わせ</a>
          </div>
        </header>
    );
};