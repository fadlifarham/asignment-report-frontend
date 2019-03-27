import axios from 'axios'

// export default function({next, router}) {
export default function({app, redirect}) {
  // console.log(app.$auth.$state.user.role_id)
  // console.log(redirect.$auth)
  let role = app.$auth.$state.user.role_id
  if (role == 4)
    redirect('/')
  else
    redirect()
}
