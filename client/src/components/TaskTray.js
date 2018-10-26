import React, {Component} from 'react';
import DeleteBtn from '../components/DeleteBtn';
import AddBtn from '../components/AddBtn';
import EditBtn from '../components/EditBtn';

export default class TaskTray extends Component {

  render() {

    return (

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <DeleteBtn />
        <AddBtn />
        <EditBtn />
      </div>

    )
  }
}
