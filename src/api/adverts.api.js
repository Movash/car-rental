import axios from 'axios';

axios.defaults.baseURL = 'https://65bbeca152189914b5bd569b.mockapi.io/api/v1/';

const LIMIT = 12;

export async function fetchFilterAdverts(data) {
  const make = data.make;
  const page = data.page ? data.page : 1;
  const res = await axios.get('adverts', {
    params: {
      make,
      page,
      limit: LIMIT,
    },
  });
  return res.data;
}

export async function fetchTotalAdverts(data) {
  const make = data.make;
  const res = await axios.get('adverts', {
    params: {
      make,
    },
  });
  if (make === "") {
    return res.data.length;
  } else {
    const adverts = res.data;
    const totalAdverts = adverts.filter(advert => advert.make === make).length;
    return totalAdverts;
  }
}