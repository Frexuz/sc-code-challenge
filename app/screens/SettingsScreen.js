import React, { Component } from 'react'
import { View, Image, Text, TouchableHighlight } from 'react-native'

import { setAppLanguage } from '@actions/LanguageActions'
import { List, ListItem, Row, Icon } from '@components'
import { scopedI18n } from '@utils'
import { Languages } from '@data'
import { Colors } from '@design'
import { Flags } from '@media'

const t = scopedI18n('screens.settings')

class SettingsScreen extends Component {
  selectLanguage = (languageKey) => {
    this.props.dispatch(setAppLanguage({ key: languageKey }))
  }

  localeName = (language) => {
    const parts = [language.name]
    if (language.localName) {
      parts.push(`(${language.localName})`)
    }

    return parts.join(' ')
  }

  render () {
    const { languageKey } = this.props
    return (
      <View>
        <List title={t('.selectLanguage')}>
          {Languages.map(language => {
            const isCurrent = languageKey === language.key

            return (
              <ListItem>
                <TouchableHighlight onPress={() => this.selectLanguage(language.key)} style={{ flex: 1, paddingVertical: 20 }}>
                  <Row alignCenter>
                    <Icon
                      name={isCurrent ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'}
                      color={isCurrent ? Colors.black : Colors.text.base}
                      size={24}
                    />
                    <Image source={Flags[language.cca2]} style={{ width: 24, height: 24, marginHorizontal: 10 }} />
                    <Text style={{ fontWeight: isCurrent ? 'bold' : 'normal' }}>{this.localeName(language)}</Text>
                </Row>
                </TouchableHighlight>
              </ListItem>
            )
          })}
        </List>
      </View>
    )
  }
}

export default SettingsScreen
