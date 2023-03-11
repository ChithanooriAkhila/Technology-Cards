// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardItem} = props
  const {title, description, imgUrl, className} = cardItem
  return (
    <li className={`${className} card`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="img-job">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
