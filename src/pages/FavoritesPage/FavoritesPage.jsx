import React, { useEffect, useState } from 'react';
import AdvertsListItem from 'components/AdvertsListItem/AdvertsListItem';
import { Container } from 'styles/Container/Container';
import { AdvertsListWrap } from 'components/AdvertsList/AdvertsList.styled';
import { FavoriteH2 } from './FavoritesPage.styled';
import { Button, TextContainer } from 'pages/WelcomePage/WelcomePage.styled';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <Container>
      <AdvertsListWrap>
        {favorites.length > 0 ? (
          favorites.map(favorite => (
            <AdvertsListItem key={favorite.id} car={favorite} />
          ))
        ) : (
          <TextContainer>
            <FavoriteH2>
              It's still empty here. Choose your favorite cars in the catalog
            </FavoriteH2>
            <Button as={Link} to="/catalog">
              Catalog
            </Button>
          </TextContainer>
        )}
      </AdvertsListWrap>
    </Container>
  );
};

export default FavoritesPage;
