import React from 'react';
import Lottie from 'react-lottie';
import animationData from './lottie-animations-2.js'

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
    };

    return <Lottie options={defaultOptions} isStopped={this.state.isStopped} />
  }
}