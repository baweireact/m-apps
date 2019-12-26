<template>
  <div>
    <div>
      <router-link to="/index/my_book" class="m-nav-item">返回书包</router-link>
      <router-link to="/address_update/add" class="m-nav-item">新增收货地址</router-link>
    </div>
    <div>
      <div v-for="(item, index) in addressList" :key="item.id">
        <Icon :type="item.checked ? 'selected' : 'danxuan' " @onClick="handleSelect(index)"></Icon>
        <span @click="handleSelect(index)" class="m-address-text">
        姓名：{{item.name}},性别：{{item.gender === 'male' ? '先生' : ''}}{{item.gender === 'female' ? '女士' : ''}},电话：{{item.phone}}
        </span>
        <div>{{item.address.map(item => item.value).join(' ')}}</div>
        <button @click="handleEdit(item)">编辑</button>
        <button @click="handleShowDialog(index)">删除</button>
      </div>
      <div v-if="addressList.length === 0">
        您还没有创建地址，赶快创建一个吧~
      </div>
    </div>
    <Dialog :visible="visible" title="提示">
      <div>你确定要删除选中的地址吗？</div>
      <div>...</div>
      <template v-slot:footer>
        <div>
          <button @click="handleHideDialog">取消</button>
          <button @click="handleDeleteSelected">确定</button>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Icon from "../components/Icon";
import Dialog from '../components/Dialog'
import Api from '../api'

export default {
  data() {
    return {
      visible: false,
      currentIndex: ''
    }
  },
  computed: {
    addressList() {
      return this.$store.state.addressList;
    }
  },
  components: {
    Icon,
    Dialog
  },
  methods: {
    handleSelect(index) {
      let addressList = this.$store.state.addressList;
      addressList.forEach(item => {
        item.checked = false;
      });
      addressList[index].checked = true;
      this.$store.commit({ type: 'setState', key: 'addressList', value: addressList })
      Api.updateAddressList({ addressListNew: addressList }).then(res => {
        
      })
    },
    handleEdit(item) {
      this.$router.push({ name: 'address_update', params: {item} })
    },
    handleShowDialog(index) {
      this.visible = true
      this.currentIndex = index
    },
    handleHideDialog() {
      this.visible = false
    },
    handleDeleteSelected() {
      let addressList = this.$store.state.addressList;
      addressList.splice(this.currentIndex, 1)
      if (addressList.length > 0 && addressList.findIndex(item => item.checked) < 0) {
        addressList[0].checked = true;
      }

      this.$store.commit({ type: 'setState', key: 'addressList', value: addressList })
      this.visible = false
      Api.updateAddressList({ addressListNew: addressList }).then(res => {
        
      })
    }
  },
  mounted() {
    this.$store.dispatch({ type: 'getAddressList' })
  }
};
</script>

<style>
</style>