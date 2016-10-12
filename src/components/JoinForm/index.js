import { connect } from 'react-redux';

import JoinForm from './JoinForm';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: () => {
      console.log(arguments);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinForm);
