import ToastManager from 'toastify-react-native'
import { Dimensions } from 'react-native'

export const ToastContainer = () => <ToastManager style={{ top: Dimensions.get('window').height / 1.5 }} />