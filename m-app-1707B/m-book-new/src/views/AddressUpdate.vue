<template>
  <div>
    <div>
      姓名：
      <input placeholder="请输入收货人姓名" v-model="name" autofocus />
    </div>
    <div>
      性别：
      <span
        class="m-gender-btn"
        :class="{active: gender === 'male'}"
        @click="handleGender('male')"
      >先生</span>
      <span
        class="m-gender-btn"
        :class="{active: gender === 'female'}"
        @click="handleGender('female')"
      >女士</span>
    </div>
    <div>
      电话：
      <input placeholder="请输入收货人电话" v-model="phone" maxlength="11" />
    </div>
    <div>
      所在地区：
      <span
        @click="handleShowAddressDialog"
        class="m-address"
      >{{address.length > 0 ? address.map(item => item.value).join(' ') : '请选择'}}</span>
    </div>
    <div>
      <input type="checkbox" :checked="checked" @change="handleCheck" id="m-check" />
      <label for="m-check">设为默认地址</label>
    </div>
    <div>
      <button @click="handleSave">保存</button>
    </div>
    <AddressDialog :visible="visible" :initAddress="address" @onSelectDone="handleSelectDone" @onCancel="handleCancel"></AddressDialog>
  </div>
</template>

<script>
import Api from "../api";
import AddressDialog from "../components/AddressDialog";

export default {
  data() {
    return {
      id: "",
      name: "",
      gender: "",
      phone: "",
      checked: true,
      visible: false,
      address: [],
      currentList: []
    };
  },
  components: {
    AddressDialog
  },
  methods: {
    handleSave() {
      let addressList = this.$store.state.addressList;
      if (this.checked) {
        addressList.forEach(item => {
          item.checked = false;
        });
      }
      if (this.name.trim() === "") {
        this.$MyAlert({ title: "消息", message: "收货人姓名不能为空" });
        return;
      } else if (this.gender === "") {
        this.$MyAlert({ title: "消息", message: "收货人性别不能为空" });
        return;
      } else if (this.phone === "") {
        this.$MyAlert({ title: "消息", message: "收货人电话不能为空" });
        return;
      } else if (this.phone.length !== 11) {
        this.$MyAlert({ title: "消息", message: "请输入正确的手机号" });
        return;
      }
      if (this.id === "") {
        addressList.unshift({
          id: Date.now(),
          checked: this.checked,
          name: this.name,
          gender: this.gender,
          phone: this.phone,
          address: this.address
        });
      } else {
        let index = addressList.findIndex(item => item.id === this.id);
        addressList[index] = {
          id: this.id,
          checked: this.checked,
          name: this.name,
          gender: this.gender,
          phone: this.phone,
          address: this.address
        };
      }

      this.$store.commit({
        type: "setState",
        key: "addressList",
        value: addressList
      });

      Api.updateAddressList({ addressListNew: addressList }).then(res => {
        if (res.code === 200) {
          this.$router.push("/address_list");
        }
      });
    },
    handleGender(gender) {
      this.gender = gender;
    },
    handleCheck(e) {
      this.checked = e.target.checked;
    },
    handleShowAddressDialog() {
      this.visible = true;
    },
    handleSelectDone(address, isLast) {
      this.address = address;
      this.visible = !isLast
    },
    handleCancel(historyAddress) {
      //this.address = [{}]
      this.visible = false
      this.address = historyAddress
    }
  },
  mounted() {
    let { item } = this.$route.params;
    if (item !== "add") {
      this.id = item.id;
      this.name = item.name;
      this.gender = item.gender;
      this.phone = item.phone;
      this.checked = item.checked;
      this.address = item.address;
      if (item.address.length > 0) {
        this.address = item.address;
      } else {
        this.address = [
          { historyIndex: 0, historyKey: 0, key: "select", value: "请选择" }
        ];
      }
    }
  }
};
</script>

<style>
</style>