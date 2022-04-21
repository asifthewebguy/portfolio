/* eslint-disable camelcase */
import { extend } from 'vee-validate'
import {
  required,
  alpha,
  alpha_spaces,
  email,
  numeric,
  max,
  min,
} from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required',
})

extend('alpha', {
  ...alpha,
  message: 'This field must only contain alphabetic characters',
})

extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'This field must only contain alphabetic characters and spaces',
})
extend('email', {
  ...email,
  message: 'Please enter a valid email address',
})
extend('phone', {
  ...numeric,
  message: 'This field must only contain numbers',
})
extend('max', {
  ...max,
  message: 'This field must be less than {length} characters',
})
extend('min', {
  ...min,
  message: 'This field must be at least {length} characters',
})
