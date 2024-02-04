import React, { useEffect, useState } from 'react';
import AdvertsListItem from 'components/AdvertsListItem/AdvertsListItem';
import { Container } from 'styles/Container/Container';
import { FavoriteH2 } from './FavoritesPage.styled';
import { Link } from 'react-router-dom';
import { Button, ListWrap, TextContainer } from 'styles/MainComponents/MainComponents.styled';
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';

const FavoritesPage = () => {
  const isLoading = useSelector(state => state.app);
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <Container>
      {isLoading && <Loader />}
      <ListWrap>
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
      </ListWrap>
    </Container>
  );
};

export default FavoritesPage;
