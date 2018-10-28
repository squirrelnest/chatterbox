let backendHost

const hostname = global && global.location && global.location.hostname;
// const hostname = window && window.location && window.location.hostname;
// const hostname = 'localhost'

if (hostname === '169.254.244.132') {
  backendHost = '169.254.244.132:3001'
} else if (hostname === 'localhost') {
  // backendHost = 'localhost:3001'
  backendHost = 'localhost:3001' // when using Node
}

// else {
//   backendHost = process.env.REACT_APP_API_HOST_DEVELOPMENT;
// }

export const API_ROOT = `${backendHost}`

export const API_WS_ROOT = `ws://${backendHost}/cable`

// export const API_ROOT = `/`
