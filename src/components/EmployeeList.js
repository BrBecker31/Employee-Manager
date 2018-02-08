
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  // renderName({ item }) {
  //   return (
  //   <Text
  //     style={{ fontSize: 18, paddingLeft: 15 }}
  //   >{item}</Text>
  //   );
  // }

  renderName({ item }) {
    return <ListItem employee={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderName}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (employee, uid) => ({
    ...employee,
    key: uid
}));
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
