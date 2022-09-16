import React from 'react'
const PrimaryButton = ({children,className,...props})=>{
    return <button  className='px-10 py-2 bg-primary text-white rounded-md hover:bg-primary-dark '  {...props}>{children} </button> 
}


const PrimaryLinkButton = ({children,link="",className,...props})=>{
    return <a href={link} className='px-10 py-2 bg-primary text-white rounded-md hover:bg-primary-dark '  {...props}>{children} </a> 
}

export {PrimaryButton,PrimaryLinkButton}