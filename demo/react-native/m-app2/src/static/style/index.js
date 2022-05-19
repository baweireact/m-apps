import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  mLoginWrap: {flex: 1,marginTop: 80,},
  mLoginRow: {position: 'relative', marginBottom: 10,paddingLeft: 10,paddingRight: 10,},
  mLoginInput: {borderColor: '#333',borderStyle: 'solid',borderWidth: 2,paddingLeft: 10,paddingTop: 4,paddingBottom: 4,borderRadius: 5, height: 42},
  mLoginPasswordIcon: {position: 'absolute', top: 8, right: 20, color: '#333', fontSize: 30},
  mLoading: {marginBottom: 5, opacity: 0 },
  mLoadingActive: {opacity: 1},
  mIndexTabItemIcon:{color: '#fff', fontSize: 30}
})

export default style
