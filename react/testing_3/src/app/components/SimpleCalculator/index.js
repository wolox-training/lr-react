import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actionCreators from '../../../redux/simpleCalculator/actions';

import SimpleCalculator from './layout';

function SimpleCalculatorContainer({ calculatorValue, add, substract }) {
  return (
    <SimpleCalculator
      calculatorValue={calculatorValue}
      onAdd={add}
      onSubstract={substract}
    />
  );
}

const mapStateToProps = state => ({
  calculatorValue: state.calculatorValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleCalculatorContainer);
