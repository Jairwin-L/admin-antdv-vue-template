const prePath = '/demo/'
const router = [
  {
    path: 'demo01',
    component: () => import('./demo01'),
    meta: {
      title: ['demo01', 'demo01']
    }
  },
  {
    path: 'demo02',
    component: () => import('./demo02'),
    meta: {
      title: ['demo01', 'demo01']
    }
  }
]

router.forEach(item => {
  item.path = prePath + item.path
})

export default router
