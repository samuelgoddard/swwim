import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../public/images/lady-ring.json'

export default class LottieTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isStopped: true};
  }
  

  render() {
    setTimeout(
      () => this.setState({ isStopped: false }), 
      1350
    );

    const defaultOptions = {
      loop: false,
      autoplay: false, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return <Lottie options={defaultOptions} isStopped={this.state.isStopped} />
  }
}