export const fetchFromApi = (
    url,
    // options = 
) => {
  console.log({url})
    return fetch(url)
        .then((res) => {
          return res.status !== 204 ? res.json() : res;
        })
        .catch((err) => {
            console.error(err);
            return err;
        });
};
