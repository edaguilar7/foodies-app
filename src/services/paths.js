const base_url = 'https://api.elaniin.dev';

export const getLocations = (type = 'takeaway', query) => `${base_url}/api/locations?type=${type}&query=${query}`;
export const saveOpinion = () => `${base_url}/api/contact`;