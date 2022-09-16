const Heading = ({children,...props})=>{
  return <h1 className="font-bold font-Inter text-[24px] text-black" props={props} > {children}   </h1>
}


const Paragraph = ({children,...props})=>{
    return <p className="font-Inter text-[14px] text-p-gray " props={props} > {children}   </p>
  }

  const Title = ({children,...props})=>{
    return <p className="font-Inter text-[20px] font-medium text-black" props={props} > {children}   </p>
  }
  const SubTitle = ({children,...props})=>{
    return <p className="font-Inter text-[16px] font-medium text-black" props={props} > {children}   </p>
  }
  
  const CustomText = ({children,className,...props})=>{
    <div className={className}> {children} </div>
  }
export {Paragraph , Heading , Title , SubTitle,CustomText}