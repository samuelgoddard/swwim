import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../public/images/tonic-lady.json'

export default class LottieAnimation extends React.Component {
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
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return <Lottie options={defaultOptions} isStopped={this.state.isStopped} />
  }
}