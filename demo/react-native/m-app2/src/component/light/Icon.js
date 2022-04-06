import { Text } from 'react-native'

export default function Icon(props) {
  let { name, className, title } = props
  return (
    <Text>{name}</Text>
  )
}
