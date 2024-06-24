import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '../views/MainPage/MainPage.vue'
import infoPage from '../views/InfoPage/InfoPage.vue'
import testPage from '../views/TestPage/TestPage.vue'
import FirstTextComponent from '../views/InfoPage/components/FirstTextComponent.vue'
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
      {
        path: '/main',
        name: 'mainPage',
        component: mainPage,
      },
      {
        path: '/info/:scrollPosition',
        name: 'infoPage',
        component: infoPage,
      },
      {
        path: '/test',
        name: 'testPage',
        component: testPage,
      },
      {
        path: '/first',
        name: 'FirstTextComponent',
        component: FirstTextComponent
      },
    ]
  })
  
  export default router