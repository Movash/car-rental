import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderCont, Overlay } from './Loader.styled';

const Loader = () => {
  return (
    <Overlay>
      <LoaderCont>
        <MagnifyingGlass />
      </LoaderCont>
    </Overlay>
  );
};

export default Loader;
