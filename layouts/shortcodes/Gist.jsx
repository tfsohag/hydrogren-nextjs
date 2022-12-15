import Script from 'next/script'
function Gist({src}) {
  console.log(src)
  return (
    <Script src={src} />
  )
}

export default Gist