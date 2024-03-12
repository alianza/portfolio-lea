export const baseStyle = { transitionDuration: '650ms', transitionTimingFunction: 'ease-out' };

export const hiddenStyle = { opacity: 0, transform: 'translateY(3em)', filter: 'blur(4px)' };

export const getBaseUrl = () => 'https://leashamaa.nl/';

export const isExternalLink = (url) => url?.startsWith('http://') || url?.startsWith('https://');

export const initialItemNum = 6;

export const revealNextItems = (allItemsVisible, setNumVisibleItems, initialNumVisibleItems = initialItemNum) => {
  if (allItemsVisible) return;
  setNumVisibleItems((prev) => prev + initialNumVisibleItems);
};
