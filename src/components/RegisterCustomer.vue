<template>
    <div class="content-area">
        <div class="title">Register Customer</div>
        <div class="content">
            <div class="input-area">
                <b-input-group prepend="First Name">
                    <b-form-input />
                </b-input-group>
                <b-input-group prepend="Last Name">
                    <b-form-input />
                </b-input-group>
                <b-input-group prepend="Birth Date">
                    <datepicker :bootstrapStyling="true" />
                    <b-input-group-append>
                        <b-btn variant="info">
                            <icon name="calendar-alt"></icon>
                        </b-btn>
                    </b-input-group-append>
                </b-input-group>
                <b-input-group prepend="Street Address">
                    <b-form-input />
                </b-input-group>
                <b-input-group prepend="Apt Unit Number">
                    <b-form-input />
                </b-input-group>
                <b-input-group prepend="City">
                    <b-form-input />
                </b-input-group>
                <b-input-group prepend="State">
                    <b-form-input />
                </b-input-group>
                <b-input-group prepend="Zipcode">
                    <b-form-input />
                </b-input-group>
            </div>
        </div>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
    name: 'register-customer',
    components: {
        Datepicker
    },
    data() {
        return {
            birthDate: new Date(),
        }
    },
    methods: {
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
        margin: 20px;
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
        margin: 10px 0 10px 0;
        width: 80%;
    }
    .input-group-text {
        font-size: 13px;
    }
    .vdp-datepicker {
        width: 80%;
    }
</style>