import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  autoClose: 2000,
  draggable: false
})

export function toasterMessage (type, message) {
  if (type === 'error') {
    toast[type](message, {
      autoClose: true
    })
  } else {
    toast[type](message)
  }
}

