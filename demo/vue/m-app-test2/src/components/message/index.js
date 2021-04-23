import Vue from 'vue'
import Message from './Message'

const MessageConstructor = Vue.extend(Message)

const message = (options) => {
  let instance = new MessageConstructor({ data: options }).$mount()
  document.body.append(instance.$el)
}

export default message