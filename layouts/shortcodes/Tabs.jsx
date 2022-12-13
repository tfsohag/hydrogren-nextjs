import { useRef, useState } from "react";

function Tabs({children}) {
  const [activeItemIndex, setActiveItemIndex] =  useState(0);

  //select tabItems
  const tabItemsRef = useRef(null);

  const handleChangTab = (index) => {
    const items = [...tabItemsRef.current.children];
    const activeItem = items.find(item => !item.classList.contains('hidden'))
    activeItem.classList.add('hidden')
    items[index].classList.remove('hidden')
    setActiveItemIndex(index)
  }

  return <div className="relative">
    <ul className="flex items-center space-x-4 list-none pl-0">
      {children.map((item, index) => <li key={index} className={index === 0 ? 'active' : ''} onClick={()=> handleChangTab(index)}>{item.props.name}</li>)}
    </ul>
    <ul className="tab-items list-none" ref={tabItemsRef}>
      {
        children
      }
    </ul>
  </div>
}

export default Tabs