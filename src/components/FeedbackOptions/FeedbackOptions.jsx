import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const feedbacks = [{ title: 'good' }, { title: 'neutral' }, { title: 'bad' }];

export const FeedbackOptions = ({onLeaveFeedback}) => {
    return <ul className={css.list}>{feedbacks.map(feedback => (<li key={feedback.title} className={css.item}><button className={css.button} name={feedback.title} type='button' onClick={onLeaveFeedback}>{feedback.title}</button></li>))}
            </ul>
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
}