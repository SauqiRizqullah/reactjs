import React from 'react';

//gambar
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

//import dari file stylesnya
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';


const Header = () => (
  <Wrapper>
    <Content>
        <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
        <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
    </Content>
  </Wrapper>  
);

export default Header;