import React from 'react';
import ProfilePage from '.././ProfilePage'
import {Container, Header, BackIcon ,ProfileInfo, BottonMenu, HomeIcon, SearchIcon, BellIncon, EmailIcon} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
           <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Guilherme Paiva</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />
      <BottonMenu>
      <HomeIcon/>
       <SearchIcon />
     <BellIncon />
       <EmailIcon />
     </BottonMenu>
    </Container>
  )
}

export default Main;