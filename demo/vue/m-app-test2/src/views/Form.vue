<template>
  <a-form
    :form="form"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 12 }"
    @submit="handleSubmit"
  >
    <a-form-item label="Note">
      <a-input v-decorator="Array.isArray(test) ? test : ''" />
    </a-form-item>
    <a-form-item label="Gender">
      <a-select
        v-decorator="[
          'gender',
          {
            rules: [{ required: true, message: 'Please select your gender!' }],
          },
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="male">
          male
        </a-select-option>
        <a-select-option value="female">
          female
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Time">
      <RangePicker v-decorator="time"></RangePicker>
    </a-form-item>
    <a-form-item label="Name">
      <Input v-decorator="['name', {initialValue: 'xu'}]"></Input>
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
      <a-button :style="{ marginLeft: '8px' }" @click="handleReset">
        Clear
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import RangePicker from "../components/RangePicker"
import Input from "../components/Input"
import { oneDay } from '../utils/time'

export default {
  components: {
    RangePicker,
    Input,
  },
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      test: [
        "note",
        {
          rules: [{ required: true, message: "Please input your note!" }],
          initialValue: "Hi!",
        },
      ],
      time: [
        "time",
        {
          initialValue: oneDay(),
        },
      ],
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values)
        }
      })
      let values = this.form.getFieldsValue()
      console.log(values)
    },
    handleReset() {
      this.form.resetFields();

      let values = this.form.getFieldsValue()
      console.log(values)      
    },    
    handleSelectChange(value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`,
      })
    },
  },
  mounted() {
    // this.form.setFieldsValue({
    //   note: `Hi!`,
    // })
    console.log(this.time)
  },
}
</script>
