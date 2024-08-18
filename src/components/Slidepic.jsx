import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'
function Slidepic({children: slides}) {
  return (
    <div>
      <div className="">
        <div className=" flex">{slides}</div>
        <div className="">
          <button>
            <BiChevronLeft/>
          </button>
          <button>
            <BiChevronLeft/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slidepic
