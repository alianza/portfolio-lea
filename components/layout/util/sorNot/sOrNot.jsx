import React from "react"
import PropTypes from "prop-types"

SOrNot.propTypes = {
    arrayLength: PropTypes.number,
    withColon: PropTypes.bool,
}

export default function SOrNot({ arrayLength, withColon }) {
    return <>{arrayLength !== 1 && "s"}{arrayLength !== 0 && withColon && ":"}</>
}
