const prePath = '/auth/'
const router = [
  {
    path: 'change-password',
    component: () => import('./change-password'),
    meta: {
      title: ['修改密码']
    }
  }
]

router.forEach(item => {
  item.path = prePath + item.path
})

export default router
