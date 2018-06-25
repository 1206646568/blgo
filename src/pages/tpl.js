export default {
  functional: true,
  // 函数式组件无上下文（没有this），无状态，没有响应式视图
  name: 'Vtable',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  render: (h, context) => {
    console.log(context)
    // solt() 和 children
    // return h('div', context.data, context.slots().slotA)
    let text = '某某君到此一游'
    return h('div', context.data, [
      h('button', {
        on: {
          click: () => {
            confirm('确定删除此记录，此操作不可撤销') && context.parent.deleteCol() ? alert('删除成功') : alert('删除失败')
          }
        }
      }, '删除'),
      h('button', {
        on: {
          click: () => {
            // 非响应视图，修改不生效
            text = '某某辉到此一游'
            alert('编辑失败')
          }
        }
      }, '修改'),
      h('div', {
        style: 'height:100px; border: solid 1px #CCC;',
        attrs: {
          title: '这是一篇文章的介绍'
        },
        domProps: {
          innerHTML: text
        }
      })
    ])
  }
}
