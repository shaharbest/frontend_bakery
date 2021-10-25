import ImageGallery from 'react-image-gallery'
import './productGallery.css'

function ProductGallery({ images }) {
  return (
    <ImageGallery
      showPlayButton={false}
      items={images.map((curImage) => ({
        original: curImage,
        thumbnail: curImage,
      }))}
    />
  )
}

export default ProductGallery
