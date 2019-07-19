let backendHost;
// const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if (hostname === 'lifeiitk.tk') {
    backendHost = 'https://lifeiitk.tk';
} else if (hostname === 'lifeiitk.com') {
    backendHost = 'https://www.lifeiitk.com';
} else {
    backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:8000';
}

export const API_ROOT = `${backendHost}/api`;
