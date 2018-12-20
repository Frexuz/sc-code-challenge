import React, { Component } from 'react'
import { Scene, Router, Tabs, Overlay, Lightbox, Modal, Stack, Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { Colors } from '@design'
import { TabIcon, ScreenTitle } from '@components'

// Screens
import UsersScreen from './UsersScreen'

const mapStateToProps = (state) => ({
  appLanguage: state.language.appLanguage
})

class AppRouter extends Component {
  onBackPress = () => {
    Actions.pop()
  }

  render () {
    return (
      <Router
        backAndroidHandler={this.onBackPress}
        navigationBarStyle={{ backgroundColor: '#fff', borderBottomColor: '#fff', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5 }}
        leftButtonTextStyle={{ fontSize: 14, color: Colors.primary, marginTop: 1 }}
        rightButtonTextStyle={{ fontSize: 14, color: Colors.primary, marginTop: 1 }}
        rightButtonStyle={{ position: 'relative', top: 0, right: 0 }}
        leftButtonStyle={{ position: 'relative', top: 0, left: 0 }}
        backButtonTintColor={Colors.primary}
      >
        <Overlay>
          <Modal>
            <Lightbox hideNavBar key='mainRouter'>
              <Scene hideNavBar>
                <Tabs
                  key='tabBar'
                  showLabel={false}
                  swipeEnabled={false}
                  animationEnabled={false}
                  tabBarPosition='bottom'
                  tabBarStyle={{ borderTopWidth: 1, borderTopColor: Colors.grey.lighter }}
                  lazy
                >
                  <Stack
                    key='usersStack'
                    title='tabs.users'
                    icon={TabIcon}
                    iconType='Users'
                  >
                    <Scene
                      key='usersScene'
                      renderTitle={() => <ScreenTitle t='titles.users' />}
                      component={connect(mapStateToProps)(UsersScreen)}
                    />
                  </Stack>
                </Tabs>
              </Scene>
            </Lightbox>
          </Modal>
        </Overlay>
      </Router>
    )
  }
}

export default AppRouter
