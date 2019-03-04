import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import MainLayout from '../../../components/layout/MainLayout';
import { logoutAction } from '../../../actions/side_effects/auth';


const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logoutAction,
}, dispatch);

const Container = props => (
  <MainLayout {...props} onClickLogout={props.logoutAction}>{props.children}</MainLayout>
);

export default connect(mapStateToProps, mapDispatchToProps)(Container);
