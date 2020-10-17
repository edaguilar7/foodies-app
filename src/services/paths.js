const base_url = 'https://api.elaniin.dev';

export const getLocations = (type = 'takeaway', query) => { 
    const query_parameter = query ? `&query?=${query}` : '';
    return `${base_url}/api/locations?type=${type}${query_parameter}`
}

export const saveOpinion = () => `${base_url}/api/contact`;

export const getCategories = () => `${base_url}/api/categories`;

export const getMenu = (category, query) => {
    const category_parameter = category ? `category=${category}${query ? '&' : ''}` : '';
    const query_parameter = query ? `query=${query}` : '';
    return `${base_url}/api/menu?${category_parameter + query_parameter}`
}