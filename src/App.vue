<template>
  <div id="app" class="h-100">
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
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  .align-middle {
    position:absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  #app {
    background-color: #ededed;
  }

</style>
