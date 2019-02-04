import React, { Component, Fragment } from 'react'

import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
import {getLeads} from '../../actions/Leads';

export class Leads extends Component {
  static PropTypes = {
    leads: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    return (
      <Fragment>
        <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th></th>
          </thead>
          <tbody>
            {this.props.leads.map(lead => {
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td><button className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(mapStateToProps, {getLeads})(Leads);
