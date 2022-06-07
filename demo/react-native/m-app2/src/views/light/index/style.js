import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  mIndexWrap: {flex: 1, backgroundColor: '#fff'},
  mIndexHeader: {height: 120, paddingTop: 70, backgroundColor: '#409eff'},
  mIndexMain: {flex: 1},
  mIndexFooter: {height: 60, borderTopWidth: 1, borderTopColor: '#ddd', flexDirection: 'row'},
  mIndexHeaderText: {height: 50, color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 30},
  mIndexFooterItem: {flex: 1},
  mIndexFooterItemIconWrap: {marginTop: 5},
  mIndexFooterItemIcon: {fontSize: 30, color: '#333', textAlign: 'center'},
  mIndexFooterItemIconActive: {color: '#f00'},
  mIndexFooterItemTextWrap: {},
  mIndexFooterItemText: {fontSize: 14, color: '#333', textAlign: 'center'},
  mIndexFooterItemTextActive: {color: '#f00'},
})

export default style
