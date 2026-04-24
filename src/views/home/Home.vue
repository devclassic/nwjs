<template>
  <h1>首页</h1>
  <button @click="about">关于</button>
  <button @click="write">写入</button>
</template>

<script setup>
  document.title = '首页'

  const about = () => {
    const url = import.meta.env.VITE_URL ?? ''
    nw.Window.open(url + 'index.html#/about', { width: 640, height: 480, position: 'center' })
  }

  const write = async () => {
    const fs = require('fs-extra')
    await fs.writeFile('测试写入.txt', '写入数据')
    alert('写入完成')
  }
</script>
