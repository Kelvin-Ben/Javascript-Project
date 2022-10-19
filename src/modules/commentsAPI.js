import { invApiUrl, appID } from './likesAPI.js';

const postComment = async (id, name, body) => {
  const response = await fetch(
    `${invApiUrl}${appID}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment: body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return response;
};

const getComments = async (id) => {
  const commentArr = await fetch(`${invApiUrl}${appID}/comments?item_id=${id}`);
  const comments = await commentArr.json();
  return comments;
};

export { postComment, getComments };