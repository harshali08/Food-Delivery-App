import React from 'react'

const CategoryDiv = (props) => {
    console.log(props.head);
    return (
      <div  ><div className="max-w-sm  ps-6 pe-6 mx-4 my-4" style={{width:"15rem",height:"12rem",boxShadow:"rgba(0, 0, 0, 0.18) 4px 4px 4px",backgroundColor:"white",borderRadius:"15px"}}>
      <div className='h-36 flex justify-center'><img className="pb-4 pt-4 " src={props.s}  alt="" style={{width:"10rem"}}/></div>
     <h2 className='font-bold pb-2  text-center'>{props.head}</h2>
     {/* <hr className=' pb-3' style={{width:"6.9rem"}} /> */}
    
    </div></div>
    )
}

export default CategoryDiv
