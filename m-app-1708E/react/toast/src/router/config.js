import ToastBase from '../views/toast/ToastBase'
import ToastDist from '../views/toast/ToastDist'
import ToastNpm from '../views/toast/ToastNpm'
import DialogBase from '../views/dialog/DialogBase'

const routerList = [
  {
    path: '/index/toast_base',
    name: 'Toast Base',
    component: ToastBase
  },
  {
    path: '/index/toast_dist',
    name: 'Toast Dist',
    component: ToastDist
  },
  {
    path: '/index/toast_npm',
    name: 'Toast NPM',
    component: ToastNpm
  },
  {
    path: '/index/dialog_base',
    name: 'Dialog Base',
    component: DialogBase
  }
]

export default routerList