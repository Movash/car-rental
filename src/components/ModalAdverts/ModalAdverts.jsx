import {
  ModalStyles,
  ButtonCloseModal,
  Svg,
  ModalImg,
  ModalMainDescr,
  ModalCarDescr,
  ModalWrapper,
  Heading3,
  ModalConditionItem,
  ModalConditionList,
  ModalSpan,
} from './ModalAdverts.styled';
import Modal from 'react-modal';
import sprite from '../../images/sprite.svg';
import { useEffect } from 'react';
import {
  AdvertsItem,
  AdvertsList,
  Button,
  ModelSpan,
} from 'styles/MainComponents/MainComponents.styled';
import placeholder from '../../images/car-placeholder.jpg';

const ModalAdverts = ({ car, isOpen, onClose }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car;

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const editedPrice = rentalPrice.slice(1) + rentalPrice[0];

  return (
    <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={onClose}>
      <ButtonCloseModal onClick={onClose}>
        <Svg>
          <use href={`${sprite}#icon-x-modal`} />
        </Svg>
      </ButtonCloseModal>
      {isOpen && (
        <>
          <ModalImg src={img || placeholder} alt="car" />
          <ModalWrapper>
            <div>
              <ModalMainDescr>
                {make} <ModelSpan>{model}</ModelSpan>, {year}
              </ModalMainDescr>
              <AdvertsList>
                {address.split(',').map((part, index) => (
                  <AdvertsItem key={index}>{part.trim()}</AdvertsItem>
                ))}
                <AdvertsItem>Id: {id}</AdvertsItem>
                <AdvertsItem>Year: {year}</AdvertsItem>
                <AdvertsItem>Type: {type}</AdvertsItem>
                <AdvertsItem>Fuel Consumption: {fuelConsumption}</AdvertsItem>
                <AdvertsItem>Engine Size: {engineSize}</AdvertsItem>
              </AdvertsList>
              <ModalCarDescr>{description}</ModalCarDescr>
            </div>
            <div>
              <Heading3>Accessories and functionalities:</Heading3>
              <AdvertsList style={{ width: '100%' }}>
                {accessories &&
                  accessories.map((access, index) => (
                    <AdvertsItem key={index}>{access}</AdvertsItem>
                  ))}
                {functionalities &&
                  functionalities.map((func, index) => (
                    <AdvertsItem key={index}>{func}</AdvertsItem>
                  ))}
              </AdvertsList>
            </div>
            <div>
              <Heading3>Rental Conditions:</Heading3>
              <ModalConditionList>
                {rentalConditions &&
                  rentalConditions.split('\n').map((condition, index) => {
                    const parts = condition.split(':');
                    const modalConditionItemClass =
                      parts.length === 1 ? '' : 'changeFontFamily';
                    return (
                      <ModalConditionItem
                        key={index}
                        className={modalConditionItemClass}
                      >
                        {parts.length === 1 ? (
                          parts[0]
                        ) : (
                          <>
                            {parts[0]}: <ModalSpan>{parts[1]}</ModalSpan>
                          </>
                        )}
                      </ModalConditionItem>
                    );
                  })}
                <ModalConditionItem>
                  Mileage:{' '}
                  <ModalSpan>{mileage.toLocaleString('en-US')}</ModalSpan>
                </ModalConditionItem>
                <ModalConditionItem>
                  Price: <ModalSpan>{editedPrice}</ModalSpan>
                </ModalConditionItem>
              </ModalConditionList>
            </div>
            <div>
              <Button type="button" as="a" href="tel:+380730000000">
                Rental car
              </Button>
            </div>
          </ModalWrapper>
        </>
      )}
    </Modal>
  );
};

export default ModalAdverts;
