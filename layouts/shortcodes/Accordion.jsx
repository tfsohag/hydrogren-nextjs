const Accordion =  ({title, children, className}) => {
  return(<div className={`border border-border accordion ${className}`}>
    <button className="text-white block bg-[#2e3b47] px-4 py-3.5 w-full text-left">
      {title}
    </button>
    <div className="px-4 py-3.5 hidden">
    {
      children
    }
    </div>
  </div>)
}

export  default Accordion