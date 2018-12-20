import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import _ from 'lodash'

import { Card, Title, Content, Avatar, Link, List, ListItem } from '@components'
import { Navigate } from '@screens'
import { scopedI18n } from '@utils'

const t = scopedI18n('screens.home')

class UserProfileScreen extends Component {
  state = {
    addressRevealed: false
  }

  revealAddress = () => {
    this.setState({ addressRevealed: true })
  }

  fullAddress = () => {
    const { street, suite, city } = this.props.user.address

    return [suite, street, city].join(', ')
  }

  render () {
    const { user } = this.props
    const { addressRevealed } = this.state

    return (
      <ScrollView contentStyle={{ flex: 1 }}>
        <Content>
          <Card containerStyle={{ padding: 0 }}>
            <View style={{ alignItems: 'center', padding: 20 }}>
              <Avatar user={user} />
              <Title text={user.username} center style={{ marginTop: 10 }} />
              <Text style={{ marginTop: 5 }}>{user.name}</Text>
            </View>
            <List containerStyle={{ margin: 0 }}>
              {!addressRevealed && (
                <ListItem icon='map-marker'>
                  <Link text='Reveal address' onPress={this.revealAddress} />
                </ListItem>
              )}
              {addressRevealed && <ListItem icon='map-marker' borderless text={this.fullAddress()} />}
              <ListItem icon='email' text={user.email} />
              <ListItem icon='phone' text={user.phone} />
              <ListItem icon='web' text={user.website} />
              <ListItem icon='briefcase' text={user.company.name} />
            </List>
          </Card>
          <List containerStyle={{ marginTop: 20 }}>
            <ListItem textStyle={{ fontWeight: 'bold' }} icon='text-subject' text='View posts' onPress={() => Navigate.to('UserPosts', { user: user })} />
            <ListItem textStyle={{ fontWeight: 'bold' }} icon='checkbox-marked-outline' text='View todo&apos;s' onPress={() => {}} />
            <ListItem textStyle={{ fontWeight: 'bold' }} icon='image-filter' text='View albums' onPress={() => {}} />
          </List>
        </Content>
      </ScrollView>
    )
  }
}

export default UserProfileScreen
