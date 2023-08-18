export const transitionBaseStyle = { transitionDuration: '650ms', transitionTimingFunction: 'ease-out' }

export const hiddenStyle = { opacity: 0, transform: 'translateY(3em)', filter: 'blur(4px)' }

export const getBaseUrl = () => 'https://leashamaa.nl/'

export function isExternalLink(url) {
  return url?.startsWith('http://') || url?.startsWith('https://');
}
