import ExampleToast from '../views/ExampleToast'
import NpmToast from '../views/NpmToast'
import NpmToastOnLine from '../views/NpmToastOnLine'

const routerList = [
  {
    path: '/index/toast',
    name: 'Toast组件',
    component: ExampleToast
  },
  {
    path: '/index/npm_toast',
    name: 'NPM包本地测试',
    component: NpmToast
  },
  {
    path: '/index/toast_react_xu',
    name: 'toast-react-xu',
    component: NpmToastOnLine
  }
]

export default routerList