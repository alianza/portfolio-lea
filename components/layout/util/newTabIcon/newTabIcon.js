import PropTypes from 'prop-types';
import Image from 'next/image';

export default function NewTabIcon({ className, style }) {
  return (
    <Image
      className={className}
      alt="Opens in a new tab"
      style={style}
      src="/openInNewTabIcon.png"
      width={16}
      height={16}
    />
  );
}

NewTabIcon.propTypes = {
  className: PropTypes.string,
};
