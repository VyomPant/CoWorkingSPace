import axios from "axios";
const api = axios.create({
    baseURL: 'https://hu-spacecorp-back-urtjok3rza-wl.a.run.app/api/'
});

export const getAllSpaces = () => api.get('/spaces');
export const getPopularSpaces = (limit:number) => api.get(`spaces/getTopRatedSpaces?limit=${limit}`);
export const getSpacesByType = (type ?:string) => api.get(`spaces/getbytypename?name=${type}`);
export const getAvgRatingBySpaceID = (id:number) => api.get(`spaces/getAverageRatingBySpaceId?id=${id}`);
export const getSpaceById = (id?:string) => api.get(`spaces/getBySpaceId?id=${id}`);
export const getReviewsBySpaceId = (id?:string) => api.get(`reviews/getBySpaceId?space_id=${id}`);

const apis = {
    getAllSpaces,
    getPopularSpaces,
    getSpacesByType,
    getAvgRatingBySpaceID,
    getSpaceById,
    getReviewsBySpaceId
}

export default apis;
