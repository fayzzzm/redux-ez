const ENDPOINT = "http://random-data-api.com";

export const fetchRandomUser = async () => {
  const response = await fetch(`${ENDPOINT}/api/users/random_user`);

  return await response.json();
};
