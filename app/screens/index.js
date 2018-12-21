import React, { Component } from 'react'
import { Scene, Router, Tabs, Overlay, Lightbox, Modal, Stack, Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { Colors } from '@design'
import { TabIcon, ScreenTitle } from '@components'

// Screens
import UsersScreen from './UsersScreen'
import UserProfileScreen from './UserProfileScreen'
import UserPostsScreen from './UserPostsScreen'
import PostCommentsScreen from './PostCommentsScreen'
import UserTodosScreen from './UserTodosScreen'
import UserAlbumsScreen from './UserAlbumsScreen'
import UserAlbumScreen from './UserAlbumScreen'
import SettingsScreen from './SettingsScreen'

const mapStateToProps = (state) => ({
  languageKey: state.language.key
})

class AppRouter extends Component {
  onBackPress = () => {
    Actions.pop()
  }

  render () {
    return (
      <Router
        backAndroidHandler={this.onBackPress}
        navigationBarStyle={{ backgroundColor: Colors.white, borderBottomColor: Colors.white, elevation: 5, shadowColor: Colors.black, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5 }}
        leftButtonTextStyle={{}}
        backButtonTintColor={Colors.link}
        sceneStyle={{ backgroundColor: Colors.grey.lightest }}
      >
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
              key='Users'
              renderTitle={() => <ScreenTitle t='titles.users' />}
              component={connect(mapStateToProps)(UsersScreen)}
            />
            <Scene
              key='UserProfile'
              renderTitle={() => <ScreenTitle t='titles.userProfile' />}
              component={connect(mapStateToProps)(UserProfileScreen)}
            />
            <Scene
              key='UserPosts'
              renderTitle={() => <ScreenTitle t='titles.userPosts' />}
              component={connect(mapStateToProps)(UserPostsScreen)}
            />
            <Scene
              key='PostComments'
              renderTitle={() => <ScreenTitle t='titles.postComments' />}
              component={connect(mapStateToProps)(PostCommentsScreen)}
            />
            <Scene
              key='UserTodos'
              renderTitle={() => <ScreenTitle t='titles.userTodos' />}
              component={connect(mapStateToProps)(UserTodosScreen)}
            />
            <Scene
              key='UserAlbums'
              renderTitle={() => <ScreenTitle t='titles.userAlbums' />}
              component={connect(mapStateToProps)(UserAlbumsScreen)}
            />
            <Scene
              key='UserAlbum'
              renderTitle={() => <ScreenTitle t='titles.userAlbum' />}
              component={connect(mapStateToProps)(UserAlbumScreen)}
            />
          </Stack>
          <Stack
            key='settingsStack'
            title='tabs.settings'
            icon={TabIcon}
            iconType='Settings'
          >
            <Scene
              key='Settings'
              renderTitle={() => <ScreenTitle t='titles.settings' />}
              component={connect(mapStateToProps)(SettingsScreen)}
            />
          </Stack>
        </Tabs>
      </Router>
    )
  }
}

// Aliasing the router's methods to avoid confusion with Redux Actions
export const Navigate = {
  to: (screenName, screenProps) => {
    Actions.push(screenName, screenProps)
  }
}

export default AppRouter
