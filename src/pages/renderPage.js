export default{
  render: (h, context) => {
    return h('article', {
      style: {
        border: ' 1px solid #CCC',
        padding: '20px'
      },
      attrs: {
        id: 'aaa'
      },
      domProps: {
        // id: 'bbb'
      },
      // on: {
      //   click: (context) => {
      //     console.log(context)
      //   }
      // },
      nativeOn: {
        click: () => {
          console.log(1)
        }
      }
    },
    [
      '这里是子节点，嘿嘿嘿嘿嘿',
      h('h1', '子标题')

    ]
    )
  }
}
