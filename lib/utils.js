import { useEffect, useState } from "react";

export const transitionBaseStyle = { transitionDuration: '650ms', transitionTimingFunction: 'ease-out' }

export const hiddenStyle = { opacity: 0, transform: 'translateY(3em)', filter: 'blur(4px)' }

export const getThumbnailUrl = (item) => {
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  useEffect(() => {
    setThumbnailUrl(window.location.origin + item.thumbnail);
  }, [])

  return thumbnailUrl;
}
