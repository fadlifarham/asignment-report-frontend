import axios from 'axios'

export default function(context) {
	// console.log('this is id : ')
  // console.log(context.$axios.$request);

  // let id = context.params.id
  // let response_id = check(context.$axios, id)
  // let user_id = context.app.$auth.$state.user.id


  context.$axios.$get('assignment/detail/' + context.params.id).then(response => {
    // console.log('ini response')
    // console.log(response.ptl_id)
    let response_id = response.ptl_id
    let user_id = context.app.$auth.$state.user.id
    // console.log(response_id)
    // console.log(context.app.$auth.$state.user.id + " = " + response.ptl_id)

    if (response_id != user_id)
      context.redirect('/')
    // else
    //   context.redirect()
    // console.log('ini user id')
    // console.log(user_id)
  })

  // console.log(response_id)
}
