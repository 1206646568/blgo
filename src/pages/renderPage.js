export default {
  render: function (h) {
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
      }
    }, [
      '这里是子节点，嘿嘿嘿嘿嘿',
      h('h1', {
        on: {
          '~click': () => {
            console.log(1)
          }
        }
      }, '子标题')

    ])
  }
}
