import PropTypes from "prop-types"
import contentStyles from "../mdContent/mdContent.module.scss"

export default function StartEndDateLabel({ startDate, endDate, centered }) {
  return(
  <div className={`${contentStyles.startEndDateLabel} ${centered ? 'justify-center' : ''}`}>
    <time>{startDate}</time>
    {"-"}
    <time>{endDate || "Present"}</time>
  </div>
  )
}

StartEndDateLabel.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string
}
