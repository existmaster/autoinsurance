<template>
  <div class="content-area">
    <div class="title">Register Vehicle</div>
    <div>
      등록하실 차량을 선택해 주세요
    </div>
    <div class="content">
      <div class="input-area">
        <select v-model="selected">
          <option v-for="option in options" v-bind:value="vehicle.data">
            {{ option.type }}
          </option>
        </select>
      </div>
    </div>
    <div class="btn-area">
      <b-button variant="primary" class="btn-reg" @click="agree" >전송</b-button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'input-ssn',
    data() {
      return {
        vechle: null,
        socialSecurityNumber: null,
        errorFlag: false,
      }
    },
    methods : {
      agree() {}
    },
    beforeMount() {
      axios.get('http://localhost:18080/dmv/vehicle-service?id=1')
        .then((result) => {
          console.log('result : ', result);
          //this.$router.push({path : "/index", query: {'yed': 'tee'}})
          this.vechle = result;

        })
        .catch((error) => {
          this.errorFlag = true;
          console.log(error)
        })
    }
  }
</script>

<style scoped>
  .title {
    font-size: 30px;
    font-weight: bold;
  }
  .content {
    width: 100%;
    margin-top: 20px;
  }
  .input-area {
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: inherit;
  }
  .input-group {
    margin: 8px 0 8px 0;
    width: 100%;
  }
  .input-group-text {
    font-size: 13px;
    color: #333333;
  }
  .vdp-datepicker {
    width: 84.8%;
  }
  .btn-reg {
    width: 120px;
  }
  .input-group-text {
    width: 122px;
  }
  .error-msg {
    color: crimson;
    margin-bottom: 10px;
  }
</style>
