<template>
  <section>
    <h1>人物</h1>
    <el-row>
      <el-col :span="2">
        <el-input v-model="limit" type="number" class="limit-input" />
      </el-col>
      <el-col :span="1">
        <el-button type="infor" @click="createNames">生成</el-button>
      </el-col>
    </el-row>
    <el-table :data="names">
      <el-table-column width="80">
        <template slot-scope="scope">
          <img :src="scope.row.thumbnail" class="avatar-image" />
        </template>
      </el-table-column>
      <el-table-column label="姓" prop="lastName" width="140" />
      <el-table-column label="名" prop="firstName" width="140" />
    </el-table>
  </section>
</template>

<script>
import * as faker from 'faker/locale/ja'

export default {
  data: () => ({
    names: [],
    limit: '10'
  }),
  computed: {
    limitTypeNumber() {
      return parseInt(this.limit)
    }
  },
  methods: {
    createNames() {
      this.names = Array.from(Array(this.limitTypeNumber).keys()).map(() => ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        thumbnail: faker.image.avatar()
      }))
    }
  }
}
</script>

<style scoped>
.limit-input {
  width: 80px;
}
.avatar-image {
  width: 24px;
  display: block;
}
</style>
