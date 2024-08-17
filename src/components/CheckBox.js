import React from 'react'

const CheckBox = ({title,onchange,state}) => {
  return (
    <div >
            <input type="checkbox" checked={state}
            onChange={onchange}/>
            {title}
    </div>
  )
}

export default CheckBox
