import AdvertsListItem from 'components/AdvertsListItem/AdvertsListItem';
import { LoadButton } from './AdvertsList.styled';
import { useSelector } from 'react-redux';
import { ListWrap } from 'styles/MainComponents/MainComponents.styled';

const AdvertsList = ({ onClick }) => {

    const cars = useSelector(state => state.adverts.adverts);
    const total = useSelector(state => state.adverts.total);
    const isShowLoadMore = total > cars.length;

    return (
      <>
        <ListWrap>
          {cars.map(car => (
            <AdvertsListItem car={car} key={car.id} />
          ))}
        </ListWrap>
        {isShowLoadMore && <LoadButton onClick={onClick}>Load More</LoadButton>}
      </>
    );
  };

export default AdvertsList;
