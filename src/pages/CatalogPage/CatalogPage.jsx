import React, { useEffect } from 'react';
import Filter from 'components/Filter/Filter';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import { Container } from 'styles/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAdverts, getFilter, getTotalAdverts} from '../../redux/adverts/thunks';
import Loader from 'components/Loader/Loader';
import { advertsSlice } from '../../redux/adverts/slice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.app);
  const page = useSelector(state => state.adverts.page);
  const make = useSelector(state => state.adverts.make);

  useEffect(() => {
    dispatch(advertsSlice.actions.setPage(1));
    dispatch(advertsSlice.actions.clearAdverts());
    dispatch(getTotalAdverts());
    dispatch(getAllAdverts({ page: 1 }));
  }, [dispatch]);

  const handleClick = () => {
    const nextPage = page + 1;
    dispatch(advertsSlice.actions.setPage(nextPage));
    if (make) {
      dispatch(getFilter({ make: make, page: nextPage }));
    } else {
      dispatch(getAllAdverts({ page: nextPage }));
    }
  };

  return (
    <Container>
      {isLoading && <Loader />}
      <Filter />
      <AdvertsList onClick={handleClick} />
    </Container>
  );
};

export default CatalogPage;
