<template>
  <div>
    <Row class="expand-row">
      <Col span="8">
      <span class="expand-key">设备名称: </span>
      <span class="expand-value">{{ row.car_type }}</span>
      </Col>
    </Row>
    <Row class="expand-row">
      <Col span="8">
      <span class="expand-key">预期保养时间: </span>
      <span class="expand-value">{{ row.expect_time_d }}</span>
      </Col>
    </Row>
    <Row class="expand-row">
      <Col span="8">
      <span class="expand-key">实际保养时间: </span>
      <span class="expand-value">{{ row.fact_time_d }}</span>
      </Col>
    </Row>
    <Row class="expand-row">
      <Col span="8">
      <span class="expand-key">维修人员: </span>
      <span class="expand-value">{{ row.memo }}</span>
      </Col>
    </Row>
    <Row class="expand-row">
      <Col span="8">
      <span class="expand-key">备注: </span>
      <span class="expand-value">{{ row.memo }}</span>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    props: {
      row: Object
    },
    data() {
      return{
      }
    }
  };
</script>

<style scoped>
  .expand-row{
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 20px;
  }
</style>
