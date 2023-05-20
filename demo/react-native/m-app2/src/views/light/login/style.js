import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  mLoginWrap: {flex: 1,marginTop: 80},
  mLoginRow: {position: 'relative', marginBottom: 0,paddingLeft: 10,paddingRight: 10,},
  mLoginInput: {borderColor: '#333',borderStyle: 'solid',borderWidth: 2,paddingLeft: 10,paddingTop: 4,paddingBottom: 4,borderRadius: 5, height: 42},
  mLoginLabelStyle: {marginBottom: 10},
  mLoginPasswordIcon: {position: 'absolute', top: 40, right: 30, color: '#333', fontSize: 30},
  mLoginBtnWrap: {paddingTop: 0, marginTop: 5, marginLeft: 20, marginRight: 20, marginBottom: 20},
  mLoading: {marginBottom: 5, opacity: 0 },
  mLoadingActive: {opacity: 1},
  mIndexTabItemIcon:{color: '#fff', fontSize: 30},
  mLoginBtnTestWrap: {margin: 20},
  mLoginBtnTest: {marginBottom: 5},
  mLoginCodeWrap: {height: 80, marginBottom: 20}
})

export default style
