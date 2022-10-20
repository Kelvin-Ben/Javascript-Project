const apiUrl = 'https://api.tvmaze.com/';

const main = async () => {
  const mainApi = await fetch(`${apiUrl}shows`);
  const resultApi = await mainApi.json();

  return resultApi;
};

export default main;