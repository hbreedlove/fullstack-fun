import { fetchFromApi } from "./api"

const service = import.meta.env.VITE_CHANNELS_SERVICE

export const getChannels = async () => {
  return await fetchFromApi(service)
}