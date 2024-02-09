import React, { useEffect, useState } from 'react';
import {
  AdvertsCard,
  AdvertsContFlex,
  MainDescr,
  SvgHeart,
} from './AdvertsListItem.styled';
import ModalAdverts from 'components/ModalAdverts/ModalAdverts';
import sprite from '../../images/sprite.svg';
import { AdvertsItem, AdvertsList, Button, ModelSpan } from 'styles/MainComponents/MainComponents.styled';
import placeholder from '../../images/car-placeholder.jpg';

const AdvertsListItem = props => {
  const [isHeartActive, setIsHeartActive] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address
  } = props.car;

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isCarFavorite = favorites.some(item => item.id === id);
    setIsHeartActive(isCarFavorite);
  }, [id]);

  const toggleHeartActive = () => {
    setIsHeartActive(!isHeartActive);
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!isHeartActive) {
      favorites.push(props.car);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      const updatedFavorites = favorites.filter(item => item.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const openModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <AdvertsCard>
        <div>
          <SvgHeart $active={isHeartActive} onClick={toggleHeartActive}>
            <use
              href={`${sprite}#icon-heart-${
                isHeartActive ? 'active' : 'normal'
              }`}
            />
          </SvgHeart>
          <img src={img || placeholder} alt="car" />
          <AdvertsContFlex>
            <MainDescr>
              {make} <ModelSpan>{model}</ModelSpan>, {year}
            </MainDescr>
            <MainDescr>{rentalPrice}</MainDescr>
          </AdvertsContFlex>
          <AdvertsList>
            {address.split(',').map((part, index) => (
              <AdvertsItem key={index}>{part.trim()}</AdvertsItem>
            ))}
            <AdvertsItem>{rentalCompany}</AdvertsItem>
            <AdvertsItem>{type}</AdvertsItem>
            <AdvertsItem>{model}</AdvertsItem>
            <AdvertsItem>{id}</AdvertsItem>
            {functionalities &&
              functionalities.map((func, index) => (
                <AdvertsItem key={index}>{func}</AdvertsItem>
              ))}
          </AdvertsList>
        </div>
        <Button
          onClick={openModalToggle}
          type="button"
          style={{ width: '100%' }}
        >
          Learn More
        </Button>
      </AdvertsCard>
      <ModalAdverts
        key={id}
        car={props.car}
        isOpen={isModalOpen}
        onClose={openModalToggle}
      />
    </>
  );
};

export default AdvertsListItem;
