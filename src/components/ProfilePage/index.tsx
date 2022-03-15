import React from "react";
import Feed from ".././Feed";
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from "./styles";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Guilherme Paiva</h1>
        <h2>@guilhermempaiva</h2>
        <p>Software Developer - FrontEnd</p>
        <ul>
          <li>
            <LocationIcon />
            Pelotas, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 07 de Abril de 1995
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>1000</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
