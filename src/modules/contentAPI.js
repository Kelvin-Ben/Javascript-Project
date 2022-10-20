const apiUrl = 'https://api.tvmaze.com/';

const main = async () => fetch(`${apiUrl}shows`).then((result) => result.json()).then((data) => data.slice(0, 12));

export default main;