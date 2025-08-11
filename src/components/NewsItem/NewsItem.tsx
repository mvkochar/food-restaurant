import classes from './NewsItem.module.css'

type NewsItemProps = {
    id: number
    image: string
    date: string
    title: string
    description: string 
}

const NewsItem = ({id, image, date, title, description}:NewsItemProps) => {
  return (
    <div className={classes.news_item}>
         <div><img src={image} alt={`news${id}`} /></div>
         <p className={classes.news_item_date}>{date}</p>
         <h6 className={classes.news_item_title}>{title}</h6>
         <p className={classes.news_item_desc}>{description}</p>
    </div>
  )
}

export default NewsItem