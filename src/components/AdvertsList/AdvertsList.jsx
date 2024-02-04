import AdvertsListItem from 'components/AdvertsListItem/AdvertsListItem';
import { AdvertsListWrap, LoadButton } from './AdvertsList.styled';
import { useSelector } from 'react-redux';

const AdvertsList = ({ onClick }) => {

    const cars = useSelector(state => state.adverts.adverts);
    const total = useSelector(state => state.adverts.total);
    const isShowLoadMore = total%12 === 0 ? true : false;

    return (
      <>
        <AdvertsListWrap>
          {cars.map(car => (
            <AdvertsListItem car={car} key={car.id} />
          ))}
        </AdvertsListWrap>
        {isShowLoadMore && <LoadButton onClick={onClick}>Load More</LoadButton>}
      </>
    );
  };

export default AdvertsList;
