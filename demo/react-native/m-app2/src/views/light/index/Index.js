import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Icon } from '../../../component/light'
import style from './style'

function Index(props) {
  const { type } = props.route.params
  const [navType, setNavType] = useState(type)
  const { navigation, title } = props

  const handleGoBackLogin = () => {
    navigation.navigate('Login')
  }

  const handleNav = (navType, title) => {
    console.log(666, navType)
    setNavType(navType)
    props.onSetState(['title'], title)
  }

  useEffect(() => {
    const { type } = props.route.params
    console.log(666, type)
  }, [])

  return (
    <>
      <View style={style.mIndexWrap}>
        <View style={style.mIndexHeader}>
          <Text style={style.mIndexHeaderText}>{title}</Text>
        </View>
        <View style={style.mIndexMain}>
          <Text>main</Text>
          <TouchableOpacity onPress={handleGoBackLogin}>
            <Text>返回登录页</Text>
          </TouchableOpacity>
        </View>
        <View style={style.mIndexFooter}>
          <TouchableWithoutFeedback onPress={() => handleNav('home', '小米书城')} style={style.mIndexFooterItem}>
            <View style={style.mIndexFooterItem}>
              <View style={style.mIndexFooterItemIconWrap}>
                <Icon
                  name={'home'}
                  style={[
                    style.mIndexFooterItemIcon,
                    navType === 'home' ? style.mIndexFooterItemIconActive : '',
                  ]}
                ></Icon>
              </View>
              <View style={style.mIndexFooterItemTextWrap}>
                <Text
                  style={[
                    style.mIndexFooterItemText,
                    navType === 'home' ? style.mIndexFooterItemTextActive : '',
                  ]}
                >
                  首页
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleNav('cart', '购物车')} style={style.mIndexFooterItem}>
            <View style={style.mIndexFooterItem}>
              <View style={style.mIndexFooterItemIconWrap}>
                <Icon
                  name={'car'}
                  style={[
                    style.mIndexFooterItemIcon,
                    navType === 'cart' ? style.mIndexFooterItemIconActive : '',
                  ]}
                ></Icon>
              </View>
              <View style={style.mIndexFooterItemTextWrap}>
                <Text
                  style={[
                    style.mIndexFooterItemText,
                    navType === 'cart' ? style.mIndexFooterItemTextActive : '',
                  ]}
                >
                  购物车
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>     
          <TouchableWithoutFeedback onPress={() => handleNav('me', '个人中心')} style={style.mIndexFooterItem}>
            <View style={style.mIndexFooterItem}>
              <View style={style.mIndexFooterItemIconWrap}>
                <Icon
                  name={'username'}
                  style={[
                    style.mIndexFooterItemIcon,
                    navType === 'me' ? style.mIndexFooterItemIconActive : '',
                  ]}
                ></Icon>
              </View>
              <View style={style.mIndexFooterItemTextWrap}>
                <Text
                  style={[
                    style.mIndexFooterItemText,
                    navType === 'me' ? style.mIndexFooterItemTextActive : '',
                  ]}
                >
                  我的
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>                
        </View>
      </View>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    title: state.getIn(['light', 'title']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({ type: 'SET_LIGHT_STATE', key, value })
    },
    onDispatch(action) {
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)