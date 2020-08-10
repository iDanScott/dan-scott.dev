<template>
  <div id="app" class="h-100" :class="backgroundClass">
    <div class="theme">
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="themeSwitch" @change="themeChanged" :checked="!isLightTheme">
        <label class="custom-control-label" for="themeSwitch">
          <b-icon icon="sun" v-if="isLightTheme"></b-icon>
          <b-icon icon="moon" v-else></b-icon>
        </label>
      </div>
    </div>
    <b-container class="h-100">
      <b-row class="h-100 position-relative">
        <b-col class="align-middle text-center">
          <b-row>
            <b-col>
              <h1 class="display-3">Dan Scott</h1>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>Full Stack Software Engineer, Bristol.</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <a href="https://github.com/iDanScott">
                Github
              </a>
            </b-col>
            <b-col>
              <a href="https://twitter.com/iDanScott">
                Twitter
              </a>
            </b-col>
            <b-col>
              <a href="https://www.linkedin.com/in/idanscott">
                LinkedIn
              </a>
            </b-col>
            <b-col>
              <a href="mailto:danscottsoft@gmail.com">
                Email
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <div class="netlify text-center">
      Hosted with ♥ on <a href="https://netlify.com">Netlify</a>
    </div>
  </div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'

export default {
  name: 'App', 
  components: {
    BIcon
  },
  data() {
    return {
      theme: 'dark'
    }
  },
  computed: {
    isLightTheme() {
      return this.theme === 'light'
    }, 
    backgroundClass() {
      return this.isLightTheme ? 'bg-light' : 'bg-dark'
    }
  }, 
  methods: {
    themeChanged() {
      this.theme = this.isLightTheme ? 'dark' : 'light'
    }
  }
}
</script>

<style scoped>
  .align-middle {
    position:absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .netlify {
    position: absolute;
    top: 100%;
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
    width: 100%;
  }

  #app {
    -webkit-user-select: none;         
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
  }

  #app.bg-light {
    background-color: #ededed !important;
    color: #1c1c1c !important;
  }

  #app.bg-dark {
    background-color: #1c1c1c !important;
    color: #ededed !important;
  }

  .bg-light .netlify {
    background-color: #fff;
    -webkit-box-shadow: 0px -2px 5px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px -2px 5px 0px rgba(0,0,0,0.1);
    box-shadow: 0px -2px 5px 0px rgba(0,0,0,0.1);
  }

  .bg-dark .netlify {
    background-color: #000;
    -webkit-box-shadow: 0px -2px 5px 0px rgba(0,0,0,0.8);
    -moz-box-shadow: 0px -2px 5px 0px rgba(0,0,0,0.8);
    box-shadow: 0px -2px 5px 0px rgba(0,0,0,0.8);
  }

  .theme { 
    position: relative;
    width: 100%;
  }
  
  .theme .custom-switch {
    float: right;
    padding: 10px;
  }

</style>
