import { ref } from 'vue'
const bus = ref(new Map())

export default function useEventsBus() {
  function emit(event, ...args) {
    bus.value.set(event, args)
  }
  return {
    emit,
    bus
  }
}

/* How to use Event Emit Bus

import { emit, bus } from 'eventBus.js'

// Send the form to parent
const { emit } = useEventsBus()
const sendForm = () => {
  emit('eventName', {
    somedata
  })
}


watch(
  () => bus.value.get('eventName'),
  (params) => {
    if (params.length) {
      someVar.value = params[0].somedata
    }
  }
)
watch(
  () => bus.value.get('eventName'),
  (params) => {
    function()
  }
)
*/
