import { fetchFromApi } from './api';

const service = import.meta.env.VITE_COLLECTIONS_SERVICE;

export const getCollections = async () => {
    return await fetchFromApi(service);
};
