<template>
    <div class="content-area">
        <div class="title">Register Customer</div>
        <div class="content">
            <div class="input-area">
                <b-input-group prepend="First Name">
                    <b-form-input v-model="firstName" />
                </b-input-group>
                <b-input-group prepend="Last Name">
                    <b-form-input v-model="lastName" />
                </b-input-group>
                <b-input-group prepend="Birth Date">
                    <datepicker :bootstrapStyling="true" :format="customFormatter" v-model="birthDate" />
                    <!-- <b-input-group-append>
                        <b-btn variant="info">
                            <icon name="calendar-alt"></icon>
                        </b-btn>
                    </b-input-group-append> -->
                </b-input-group>
                <b-input-group prepend="Street Address">
                    <b-form-input v-model="streetAddress" />
                </b-input-group>
                <b-input-group prepend="Apt Unit Number">
                    <b-form-input type="number" v-model="aptUnitNumber" />
                </b-input-group>
                <b-input-group prepend="City">
                    <b-form-input v-model="city" />
                </b-input-group>
                <b-input-group prepend="State">
                    <b-form-input v-model="state" />
                </b-input-group>
                <b-input-group prepend="Zipcode">
                    <b-form-input v-model="zipcode" />
                </b-input-group>
            </div>
        </div>
        <div class="btn-area">
            <b-button class="btn-reg" @click="cancle">초기화</b-button>
            <b-button variant="primary" class="btn-reg" @click="join" >가입</b-button>
        </div>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import axios from 'axios';
import moment from 'moment';

export default {
    name: 'register-customer',
    components: {
        Datepicker
    },
    data() {
        return {
            firstName: null,
            lastName: null,
            birthDate: null,
            streetAddress: null,
            aptUnitNumber: null,
            city: null,
            state: null,
            zipcode: null,
        }
    },
    methods: {
        customFormatter(date) {
            return moment(date).format('YYYY-MM-DD');
        },
        cancle() {
            this.firstName = null;
            this.lastName = null;
            this.birthDate = null;
            this.streetAddress = null;
            this.aptUnitNumber = null;
            this.city = null;
            this.state = null;
            this.zipcode = null;
        },
        join() {
            if (this.firstName == null) { alert('Please, check input first name'); return; }
            else if (this.lastName == null) { alert('Please, check input last name'); return; }
            else if (this.birthDate == null) { alert('Please, check input birth date'); return; }
            else if (this.streetAddress == null) { alert('Please, check input street address'); return; }
            else if (this.aptUnitNumber == null) { alert('Please, check input apt unit number'); return; }
            else if (this.city == null) { alert('Please, check input city'); return; }
            else if (this.state == null) { alert('Please, check input state'); return; }
            else if (this.zipcode == null) { alert('Please, check input zipcode'); return; }

            axios.post('http://127.0.0.1:18080/customer',
            {
                firstName: this.firstName,
                lastName: this.lastName,
                birthDate: this.birthDate,
                streetAddress: this.streetAddress,
                aptUnitNumber: this.aptUnitNumber,
                city: this.city,
                state: this.state,
                zipcode: this.zipcode,
            })
            .then((result) => {
                console.log('result : ', result);
                alert('가입이 완료되었습니다!');
                this.$localStorage.set('customerId', result.data._links.customer.href);
                this.$router.push({path : "/input-ssn"});
                //this.$router.push({path : "/index", query: {'yed': 'tee'}})

            })
            .catch((error) => {
                console.log(error)
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
</style>
