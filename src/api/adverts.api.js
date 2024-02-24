import axios from 'axios';

axios.defaults.baseURL = 'https://65bbeca152189914b5bd569b.mockapi.io/api/v1/';

const LIMIT = 12;

export async function fetchAdverts(data) {
  const page = data.page ? data.page : 1;
  const res = await axios.get('adverts', {
    params: {
      page,
      limit: LIMIT,
    },
  });
  return res.data;
}

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

export async function fetchTotalAdverts() {
  const res = await axios.get('adverts');
  return res.data.length;
}