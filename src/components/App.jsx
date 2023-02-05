import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notofication/Notification";
import css from "./App.module.css";

export class App extends Component {
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
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
  }
        
  countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = this.state;
      return Math.floor(good / (good + neutral + bad) * 100) + '%'
  }

  render() {
      return (
          <div className={css.container}>
              <Section title="Please leave feedback">
                  <FeedbackOptions options={["good", "bad", "neutral"]} onLeaveFeedback={this.handleClick}/>
              </Section>

              <Section title="Statistics">
                  {this.countTotalFeedback() >= 1
                  ?
                  <Statistics
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={this.countTotalFeedback}
                  positivePercentage={this.countPositiveFeedbackPercentage} />
                  :
                  <Notification message="There is no feedback" />}
              </Section>
          </div>
      )
    }
};
