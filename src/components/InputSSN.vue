<template>
  <div class="content-area">
    <div class="title">InputSSN</div>
    <div>
      개인정보를 제공 동의가 필요합니다. 다음 칸에 SSN 번호를 입력해 주세요.
    </div>
    <div class="content">
      <div class="input-area">
        <b-input-group prepend="SSN">
          <b-form-input v-model="socialSecurityNumber" />
        </b-input-group>
      </div>
    </div>
    <div class="error-msg" v-if="errorFlag">
      Bad Credit or Invalid DL
    </div>
    <div class="btn-area">
      <b-button class="btn-reg" @click="cancle">미동의</b-button>
      <b-button variant="primary" class="btn-reg" @click="agree" >동의</b-button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'input-ssn',
    data() {
      return {
        socialSecurityNumber: null,
        errorFlag: false,
      }
    },
    methods: {
      cancle() {
        this.$router.push({path : "/"});
      },
      agree() {
        if (this.socialSecurityNumber == null) { alert('Please, check input SSN'); return; }
        const customerId = this.$localStorage.get('customerId');
        //http PATCH "http://localhost:18080/customer/BCA" socialSecurityNumber=3533349
        axios.patch(customerId,
          {
            socialSecurityNumber: this.socialSecurityNumber,
          })
          .then((result) => {
            console.log('result : ', result);
            //this.$router.push({path : "/index", query: {'yed': 'tee'}})
            this.errorFlag = false;
            this.upgrade();

          })
          .catch((error) => {
            this.errorFlag = true;
            console.log(error)
          })
      },
      upgrade(){
        axios.post('http://localhost:18080/policyholder', {
          customer : this.$localStorage.get('customerId')
        })
          .then((result) => {
            console.log('result : ', result);
            this.$localStorage.set('policyholderId', result.data._links.self.href)
            this.$router.push({path : "/input-vehicle"});
          })
          .catch((error) => {
          console.log(error);
        })
      }
    },
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

