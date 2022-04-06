import { createIconSet } from 'react-native-vector-icons'
import fontFile from '../../static/fonts/iconfont.ttf'
import iconfontJson from '../../static/fonts/iconfont.json'

const getIconOption = () => {
  let glyphMap = {}
  if (
    iconfontJson &&
    Array.isArray(iconfontJson.glyphs) &&
    iconfontJson.glyphs.length > 0
  ) {
    iconfontJson.glyphs.forEach((item) => {
      glyphMap[item.font_class] = item.unicode_decimal
    })
  }
  return {
    glyphMap,
    fontFamily: 'iconfont',
  }
}
const { glyphMap, fontFamily } = getIconOption()
const Icon = createIconSet(glyphMap, fontFamily, fontFile)

export default function MyIcon(props) {
  let { name, style, onPress } = props
  return <Icon name={name} style={style} onPress={onPress}></Icon>
}
