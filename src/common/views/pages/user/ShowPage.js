import React, { Component } from 'react';
import PageLayout from '../../layouts/PageLayout';
import BsPageHeader from '../../components/BsPageHeader';
import userAPI from '../../../api/user';

export default class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    userAPI
      .show()
      .catch((err) => {
        alert('Show user fail');
        throw err;
      })
      .then((json) => {
        this.setState({
          user: json.user,
        });
      });
  }

  render() {
    return (
      <PageLayout>
        <BsPageHeader title="My Profile" />
        {JSON.stringify(this.state.user)}
      </PageLayout>
    );
  }
};