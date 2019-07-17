let backendHost;
// const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if (hostname === 'lifeiitk.tk') {
    backendHost = 'https://www.lifeiitk.tk';
} else if (hostname === 'lifiitk.com') {
    backendHost = 'https://www.lifiitk.com';
} else {
    backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:8080';
}

export const API_ROOT = `${backendHost}/api`;