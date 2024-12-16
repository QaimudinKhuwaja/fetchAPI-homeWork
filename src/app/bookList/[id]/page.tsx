import React from 'react'

const dynamicApi = async (props:any) => {
   
  return (
   <>
    <h1>{props.params.id}</h1>

   </>
  )
}

export default dynamicApi