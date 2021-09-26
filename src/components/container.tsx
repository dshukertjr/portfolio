import React, { FC } from 'react'

const Wrapper: FC = (props) => {
  return <div className="py-12 px-4">{props.children}</div>
}

export default Wrapper
