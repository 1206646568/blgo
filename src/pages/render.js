export default{
  render: (h, context) => {
    return h('article', {
      style: {
        border: ' 1px solid #CCC',
        padding: '20px'
      },
      attrs: {
        title: '设置了原生属性'
      }
    },
    [
      '这里是子节点，嘿嘿嘿嘿嘿',
      h('h1', '子标题')

    ]
    )
  }
}
