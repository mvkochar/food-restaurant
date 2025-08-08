import React from 'react'
import classes from './FaqItem.module.css'

type FaqItemProps = {
    id: number
    question: string
    answer: string
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
    const [showAnswer, setShowAnswer] = React.useState(false)
    const handleShowAnswer = ()=> {
        setShowAnswer((prevState)=> {
            return (
                !prevState
            )
        })
    }

    return (
        <div className={classes.faq_item}>
            <div>
                <h5 className={classes.faq_item_question}>{question}</h5>
                <p className={showAnswer ? classes.faq_item_answer : classes.d_n}>{answer}</p>
            </div>
            <button className={classes.faq_item_btn} onClick={handleShowAnswer}>
                <img src={showAnswer ? "/images/minus.png" : "/images/plus.png"} alt="plus/minus" />
            </button>
        </div>
    )
}

export default FaqItem