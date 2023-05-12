import React from 'react'
interface Props{
    testId?:string
}
function Spinner({testId}:Props) {
  return (
    <div data-testid={testId} className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
  )
}

export default Spinner