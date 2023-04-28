<template>
  <b-row class="h-100">
    <b-colxx xxs="12" md=10  class="mx-auto my-auto">
      <b-card class="auth-card" no-body>
          <div class="position-relative image-side ">
            <p class=" text-white h2">{{ $t('dashboards.slogan') }}</p>
              <p class="white mb-0"><br />  填寫完即可完成註冊 <br />已經是會員了嗎 ? 
                <router-link to="/user/login" class="white">請登入</router-link>.
              </p>
          </div>
          <div class="form-side">
            <router-link to="/"><span class="logo-single"/></router-link>
            <h6 class="mb-4">{{ $t('user.register')}}</h6>
            <b-form @submit.prevent="formSubmit" class="av-tooltip tooltip-label-bottom">
              <b-form-group :label="$t('姓名')" class="has-float-label mb-4">
                  <b-form-input type="text" v-model="$v.form.fullname.$model" :state="!$v.form.fullname.$error" />
              </b-form-group>
              <b-form-group :label="$t('user.phone')" class="has-float-label mb-4">
                  <b-form-input type="text" v-model="$v.form.phone.$model" :state="!$v.form.phone.$error" />
                  <!--<b-form-invalid-feedback v-else-if="!$v.form.phone.phone">請輸入正確的手機號碼</b-form-invalid-feedback>-->
              </b-form-group>
              <b-form-group :label="$t('user.email')" class="has-float-label mb-4">
                  <b-form-input type="email" v-model="$v.form.email.$model" :state="!$v.form.email.$error" />
              </b-form-group>
              <b-form-group :label="$t('user.password')" class="has-float-label mb-4">
                  <b-form-input type="password" v-model="$v.form.password.$model" :state="!$v.form.password.$error" />
              </b-form-group>
              <div class="d-flex justify-content-end align-items-center">
                <b-button type="submit" variant="primary" size="lg" :disabled="processing" :class="{'btn-multiple-state btn-shadow': true,
              'show-spinner': processing,
              'show-success': !processing && registerError===false,
              'show-fail': !processing && registerError }">
                  <span class="spinner d-inline-block">
                      <span class="bounce1"></span>
                      <span class="bounce2"></span>
                      <span class="bounce3"></span>
                  </span>
                  <span class="icon success">
                      <i class="simple-icon-check"></i>
                  </span>
                  <span class="icon fail">
                      <i class="simple-icon-exclamation"></i>
                  </span>
                  <span class="label">{{ $t('user.register-button') }}</span>
                </b-button>
              </div>
          </b-form>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import { adminRoot } from '../../constants/config';
import {
    mapGetters,
    mapActions
} from "vuex";
import {
    validationMixin
} from "vuelidate";
import { validPhone } from "../../components/Form/validPhone";
const {
    required,
    maxLength,
    minLength,
    email
} = require("vuelidate/lib/validators");

export default {
  data () {
    return {
      form: {
        fullname: "",
        email: "",
        phone: "",
        password: ""
      },
    }
  },
  mixins: [validationMixin],
    validations: {
        form: {
            fullname: {
                required,
                maxLength: maxLength(16),
            },
            email: {
                required,
                email
            },
            password: {
                required,
                maxLength: maxLength(16),
                minLength: minLength(4)
            },
            phone: {
                required,
                //validPhone,
                minLength: minLength(0)
            }
        }
    },
  computed: {
        ...mapGetters(["currentUser", "processing", "registerError"])
    },
  methods: {
    ...mapActions(["register"]),
    formSubmit () {
      this.$v.$touch();
      console.log(this.form);
      this.register({
          username: this.form.fullname,
          email: this.form.email,
          phone: this.form.phone,
          password: this.form.password
      });
    }
  },
  watch: {
      currentUser(val) {
          this.$notify("success", "Register success", "已新增用戶 " + val.title, {
              duration: 3000,
              permanent: false
          });
          if (val) {
              setTimeout(() => {
                  this.$router.push("/user/login");
              }, 200);
          }
      },
      registerError(val) {
        //console.log(val);
          this.$notify("error", "Register Error", val, {
              duration: 3000,
              permanent: false
          });
      }
  }
}
</script>
