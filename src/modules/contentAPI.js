const apiUrl = 'https://api.tvmaze.com/';

const main = async () => fetch(`${apiUrl}shows`).then((result) => result.json()).then((data) => data.slice(0, 30));

export default main;