import productNames from './name-constants.json'

// UI Constants
export const HEADER_HEIGHT = 64

// API Endpoints
export const API_USER = '/api/www/user'
export const API_USER_TOKENS = '/v3/user/tokens'
export const API_USER_TOKEN_TESTING = '/api/user/tokens/testing'
export const API_TEAMS = '/api/teams'
export const API_ENDPOINT = 'https://api.vercel.com'
export const API_DOCS_FEEDBACK = 'https://vercel.com/feedback-api'
export const API_LIMITS = `${API_ENDPOINT}/v1/ratelimits`
export const API_FRAMEWORKS = '/api/v1/frameworks'

// Product names: Use JSON so it can be imported in scripts
export const PRODUCT_NAME = productNames.productName
export const PRODUCT_DOMAIN = productNames.productDomain
export const DEPLOYMENT_SUFFIX = productNames.deploymentSuffix
export const CDN_NAME = productNames.cdnName
export const CDN_SHORT_NAME = productNames.cdnShortName
export const ORG_NAME = productNames.orgName
export const PRODUCT_SHORT_NAME = productNames.productShortName
export const GITHUB_APP_NAME = productNames.githubAppName
export const GITLAB_APP_NAME = productNames.gitlabAppName
export const BITBUCKET_APP_NAME = productNames.bitbucketAppName

export const PRODUCT_GITHUB = 'github.com/vercel'
export const PRODUCT_TWITTER = 'twitter.com/vercel'

export const BREAKPOINTS = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
}
