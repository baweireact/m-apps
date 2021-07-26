import React, { Component } from 'react'
import { connect } from 'react-redux'

class Sidebar extends Component {
  render() {
    const { listAll } = this.props
    return (
      <div className="m-sidebar">
        {
          listAll.map(item => (
            <div key={item.id} className="m-sidebar-item">{item.title}</div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listAll: state.getIn(['book', 'listAll']).toJS()
  }
}

export default connect(mapStateToProps)(Sidebar)
