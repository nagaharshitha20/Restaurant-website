import { OAUTH_CONFIG } from '../config/oauth';

// Google OAuth
export const initiateGoogleLogin = () => {
  const { CLIENT_ID, REDIRECT_URI, SCOPE } = OAUTH_CONFIG.GOOGLE;
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?
    client_id=${CLIENT_ID}&
    redirect_uri=${REDIRECT_URI}&
    scope=${SCOPE}&
    response_type=code&
    access_type=offline`;
  window.location.href = googleAuthUrl.replace(/\s/g, '');
};

// GitHub OAuth
export const initiateGithubLogin = () => {
  const { CLIENT_ID, REDIRECT_URI, SCOPE } = OAUTH_CONFIG.GITHUB;
  const githubAuthUrl = `https://github.com/login/oauth/authorize?
    client_id=${CLIENT_ID}&
    redirect_uri=${REDIRECT_URI}&
    scope=${SCOPE}`;
  window.location.href = githubAuthUrl.replace(/\s/g, '');
};

// LinkedIn OAuth
export const initiateLinkedinLogin = () => {
  const { CLIENT_ID, REDIRECT_URI, SCOPE } = OAUTH_CONFIG.LINKEDIN;
  const linkedinAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?
    response_type=code&
    client_id=${CLIENT_ID}&
    redirect_uri=${REDIRECT_URI}&
    scope=${SCOPE}`;
  window.location.href = linkedinAuthUrl.replace(/\s/g, '');
}; 