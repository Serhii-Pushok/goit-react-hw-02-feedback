import { Component } from "react";

const feedbacks = [{ title: 'good' }, { title: 'neutral' }, { title: 'bad' }];

export class Vouter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleClick = event => {
        const { name } = event.target;
        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }))
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad
    }
        

    countPositiveFeedbackPercentage = () => {
        return Math.floor(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100) + '%'
    }

    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <ul>{feedbacks.map(feedback => (<li key={feedback.title}><button name={feedback.title} type='button' onClick={this.handleClick}>{feedback.title}</button></li>))}
                </ul>
                <h2>Statistics</h2>
                <ul>
                    <li>
                        <p>good: {this.state.good}</p>
                    </li>
                    <li>
                        <p>neutral: {this.state.neutral}</p>
                    </li>
                    <li>
                        <p>bad: {this.state.bad}</p>
                    </li>
                    <li>
                        <p>total: {this.countTotalFeedback()}</p>
                    </li>
                    <li>
                        <p>positive feedback: {this.countPositiveFeedbackPercentage()}</p>
                    </li>
                </ul>
            </div>
        )
    }
}