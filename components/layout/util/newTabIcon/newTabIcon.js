import PropTypes from "prop-types";

export default function NewTabIcon({ className, style }) {
  return (<img className={className} alt="Opens in a new tab" style={style}
               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg=="/>)
}

NewTabIcon.propTypes = {
  className: PropTypes.string
}
