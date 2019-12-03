import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import {
  QAvatar,
  QAjaxBar,
  QCard,
  QCardSection,
  QCardActions,
  QBtn,
  QDrawer,
  QForm,
  QHeader,
  QIcon,
  QImg,
  QItem,
  QItemSection,
  QItemLabel,
  QLayout,
  QList,
  QPage,
  QPageContainer,
  QRouteTab,
  QSelect,
  QTab,
  QTabs,
  QToolbar,
  QToolbarTitle,
  Quasar,
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QAvatar,
    QAjaxBar,
    QBtn,
    QCard,
    QCardSection,
    QCardActions,
    QDrawer,
    QForm,
    QHeader,
    QImg,
    QIcon,
    QItem,
    QItemSection,
    QItemLabel,
    QLayout,
    QList,
    QPage,
    QPageContainer,
    QRouteTab,
    QSelect,
    QTab,
    QTabs,
    QToolbar,
    QToolbarTitle,
  },
  directives: {
  },
  plugins: {
  }
 })
