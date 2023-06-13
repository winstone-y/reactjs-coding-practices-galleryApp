// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, displayImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const thumbnailClassName = isActive ? 'active-thumbnail' : 'thumbnail'

  const selectedImage = () => {
    displayImage(id)
  }

  return (
    <li className="thumbnail-item">
      <button onClick={selectedImage} type="button" className="button">
        <img
          className={thumbnailClassName}
          alt={thumbnailAltText}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
