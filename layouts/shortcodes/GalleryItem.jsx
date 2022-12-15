import Image from "next/image";
import { LightgalleryItem } from "react-lightgallery";

const GalleryItem = ({src, width}) => {

  return (
    <LightgalleryItem src={src} group="any" itemClassName="gallery-item" subHtml="div">
        <Image className="gallery-img my-0" src={src}  width={500} height={300} alt="gallery image" style={{width: width, height: 294}} />
    </LightgalleryItem>
  )
}

export default GalleryItem