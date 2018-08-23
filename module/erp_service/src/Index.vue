<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .container {
    padding: 10px;
  }
</style>
<template>
  <div class="container">
    <Tabs value="name1">
      <TabPane label="动态" name="name1">
        <div style="border: 1px solid #e8eaec;border-radius: 5px;">
          <Card :bordered="false">
            <p slot="extra">
              <img src="./assets/logo.png" alt="">
              Classic film
            </p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          </Card>
        </div>
      </TabPane>
      <TabPane label="最新内容" name="name2">最新内容</TabPane>
    </Tabs>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formItem: {
          input: '',
          select: '',
          date:''
        }
      }
    },
    methods: {}
  }
</script>
