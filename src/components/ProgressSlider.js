import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

/*
Most of the code in this component is from: 
https://material-ui.com/lab/slider/  slider with steps
*/

const styles = {
  root: {
    display: 'flex',
    height: 200,
    width: 0,
    paddingTop: 20,
  },
  slider: {
    padding: '0px 22px',
  },
};

class ProgressSlider extends React.Component {
  state = {
    local_value: 1,
  };

  handleChange = (event, local_value) => {
    this.setState({ local_value });
    this.props.changeProgress(local_value)
  };

  render() {
    const { classes } = this.props;
    const { local_value } = this.state;

    return (
      <div className={classes.root}>
        <Slider
          classes={{ container: classes.slider }}
          value={local_value}
          min={1}
          max={this.props.bookseries[0].books}
          step={1}
          onChange={this.handleChange}
          vertical
        />
      </div>
    );
  }
}

ProgressSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  bookseries: PropTypes.array.isRequired,
  changeProgress: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProgressSlider);