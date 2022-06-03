import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Tab, Text, TabView } from '@rneui/themed'
import { Icon } from '../../../component/light'
import style from '../../../static/style/index.js'


export default function Index(props) {
  const [index, setIndex] = React.useState(0)
  const { navigation } = props

  const handleGoBackLogin = () => {
    navigation.navigate('Login')
  }

  return (
    // <View>
    //   <Text>Index</Text>
    //   <TouchableOpacity onPress={handleGoBackLogin}>
    //     <Text>返回登录页</Text>
    //   </TouchableOpacity>
    // </View>
    <>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>

      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="首页"
          titleStyle={{ fontSize: 12 }}
          icon={<Icon name={'home'} style={style.mIndexTabItemIcon}></Icon>}
        />
        <Tab.Item
          title="购物车"
          titleStyle={{ fontSize: 12 }}
          icon={<Icon name={'car'} style={style.mIndexTabItemIcon}></Icon>}
        />
        <Tab.Item
          title="我的"
          titleStyle={{ fontSize: 12 }}
          icon={<Icon name={'username'} style={style.mIndexTabItemIcon}></Icon>}
        />
      </Tab>
    </>
  )
}