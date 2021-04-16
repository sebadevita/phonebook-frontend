import React from 'react'

export const PersonFilter = ({ filterName, handleFilterName }) => {
  return (
    <div>
      <label>filter shown with: </label>
      <input value={filterName} onChange={handleFilterName} />
    </div>
  )
}
