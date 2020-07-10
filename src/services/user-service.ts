import {getAsync, withEndpoint} from '@utils/http-client';

const userUrl = withEndpoint('users');

export const getUsersAsync = (page: number) => {
  const url = userUrl('?delay=2&page=' + page);
  return getAsync(url);
};

export const getUserDetailsAsync = (id: number) => {
  const url = userUrl('/' + id);
  return getAsync(url);
};
