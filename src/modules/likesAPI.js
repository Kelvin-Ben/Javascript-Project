const invApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const appID = 'meucUCU2jpjkDcWN5JDX';

const postLike = async (id) => {
  const response = await fetch(
    `${invApiUrl}${appID}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return response;
};

const getLikes = async () => {
  const likesData = await fetch(`${invApiUrl}${appID}/likes`);
  const likesArr = await likesData.json();
  return likesArr;
};

const updateLikes = async (id) => {
  const storeLikes = await getLikes();
  let results = 0;
  storeLikes.forEach((e) => {
    if (e.item_id.toString() === id.toString()) {
      results = e.likes;
    }
  });

  return results;
};

export {
  getLikes, postLike, updateLikes, invApiUrl, appID,
};