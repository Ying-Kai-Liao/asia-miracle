import firebase from 'firebase/app'
import 'firebase/auth'
import { currentUser, isAuthGuardActive } from '../../constants/config'
import { setCurrentUser, getCurrentUser } from '../../utils'
import axios from 'axios'

export default {
  state: {
    currentUser: isAuthGuardActive ? getCurrentUser() : currentUser,
    loginError: null,
    processing: false,
    forgotMailSuccess: null,
    resetPasswordSuccess: null
  },
  getters: {
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    loginError: state => state.loginError,
    registerError: state => state.registerError,
    forgotMailSuccess: state => state.forgotMailSuccess,
    resetPasswordSuccess: state => state.resetPasswordSuccess,
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload
      state.processing = false
      state.loginError = null
      state.registerError = null
    },
    setLogout(state) {
      state.currentUser = null
      state.processing = false
      state.loginError = null
      state.registerError = null
    },
    setProcessing(state, payload) {
      state.processing = payload
      state.loginError = null
      state.registerError = null
    },
    setError(state, payload) {
      state.loginError = payload
      state.currentUser = null
      state.processing = false
    },
    setRegisterError(state, payload) {
      state.registerError = payload
      state.currentUser = null
      state.processing = false
    },
    setForgotMailSuccess(state) {
      state.loginError = null
      state.registerError = null
      state.currentUser = null
      state.processing = false
      state.forgotMailSuccess = true
    },
    setResetPasswordSuccess(state) {
      state.loginError = null
      state.registerError = null
      state.currentUser = null
      state.processing = false
      state.resetPasswordSuccess = true
    },
    clearError(state) {
      state.loginError = null
      state.registerError = null
    }
  },
  actions: {
    login({ commit }, payload) {
      commit('clearError')
      commit('setProcessing', true)
      axios
        .post('http://34.29.129.56:8080/login/', {
          phone: payload.phone,
          password: payload.password
        })
        .then(response => {
          console.log("this is response --> " + JSON.stringify(response));
          const item = { 
            title: response.data.username,
            email: response.data.email,
            phone: response.data.phone,
            role: parseInt(response.data.auth),
            img: "/assets/img/profiles/doctor_1.png"
          }
          setCurrentUser(item)
          commit('setUser', item)
        })
        .catch(error => {
          setCurrentUser(null)
          commit('setError', error.message)
          setTimeout(() => {
            commit('clearError')
          }, 3000)
        })
    },
    register({ commit }, payload) {
      commit('clearError')
      commit('setProcessing', true)
      console.log("this is payload --> " + JSON.stringify(payload));
      axios
        .post('http://34.29.129.56:8080/register/', {
          username: payload.username,
          email: payload.email,
          phone: payload.phone,
          password: payload.password
        })
        .then(response => {
          console.log("this is response --> " + JSON.stringify(response));
          const item = {
            title: payload.username,
            email: payload.email,
            phone: payload.phone
          }
          setCurrentUser(item)
          commit('setUser', item)
        })
        .catch(error => {
          setCurrentUser(null)
          commit('setRegisterError', error.message)
          setTimeout(() => {
            commit('clearError')
          }, 3000)
        })
    },
    forgotPassword({ commit }, payload) {
      commit('clearError')
      commit('setProcessing', true)
      firebase
        .auth()
        .sendPasswordResetEmail(payload.email)
        .then(
          user => {
            commit('clearError')
            commit('setForgotMailSuccess')
          },
          err => {
            commit('setError', err.message)
            setTimeout(() => {
              commit('clearError')
            }, 3000)
          }
        )
    },
    resetPassword({ commit }, payload) {
      commit('clearError')
      commit('setProcessing', true)
      firebase
        .auth()
        .confirmPasswordReset(payload.resetPasswordCode, payload.newPassword)
        .then(
          user => {
            commit('clearError')
            commit('setResetPasswordSuccess')
          },
          err => {
            commit('setError', err.message)
            setTimeout(() => {
              commit('clearError')
            }, 3000)
          }
        )
    },


    signOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          setCurrentUser(null);
          commit('setLogout')
        }, _error => { })
    }
  }
}
