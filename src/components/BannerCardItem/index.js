// Write your code here.
import './index.css'

const BannerCardItem = props => {
  console.log(props)
  const {cardlist} = props
  console.log(cardlist)
  const {headerText, description, className} = cardlist
  return (
    <li className={`main_container ${className}`}>
      <h1 className="main_heading">{headerText}</h1>
      <p className="description_heading">{description}</p>
      <div>
        <button type="button" className="button_">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
