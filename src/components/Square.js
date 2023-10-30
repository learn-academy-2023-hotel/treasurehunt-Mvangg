import React from "react"

const Square = ({value, index}) => {
  // destructuring props
  // const { value } = props; is same as props.value
  // instead pass the destructured prop in the paranetheses
  return (
    <>
      <div className="square">{value}</div>
    </>
  )
}
export default Square
 