// USAGE:
// <RefreshableScrollView fetchData={fetchDataMethod}>
//   <SomeComponent ... />
// </RefreshableScrollView>

import React, { Component } from 'react'
import { ScrollView, RefreshControl } from 'react-native'

class RefreshableScrollView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      refreshing: false
    }
  }

  onRefresh = () => {
    this.setState({ refreshing: true })

    this.props.fetchData()
      .then(() => {
        this.setState({ refreshing: false })
      }).catch(() => {
        this.setState({ refreshing: false })
      })
  }

  render () {
    return (
      <ScrollView
        style={this.props.style}
        contentContainerStyle={this.props.contentContainerStyle}
        onScroll={this.props.onScroll}
        scrollEventThrottle={this.props.scrollEventThrottle || 0}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
      >
        {this.props.children}
      </ScrollView>
    )
  }
}

export default RefreshableScrollView
