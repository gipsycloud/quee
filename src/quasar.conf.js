import Vue from 'vue'
import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import VueQrcodeReader from "vue-qrcode-reader";
import {
  Quasar, QAvatar, QAjaxBar, QCard, QCardSection, QCardActions, QBtn, QBadge, QDrawer, QForm, QHeader, QIcon, QImg,
  QInput, QItem, QItemSection, QItemLabel, QLayout, QList, QPage, QPageContainer, QRating, QRouteTab, QSelect, QSeparator,
  QSpinner, QTab, QTabs, QTime, QToolbar, QToolbarTitle, QDialog,
  ClosePopup
  // for spinner
  // QSpinnerAudio,
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: { QAvatar, QAjaxBar, QBtn, QBadge, QCard, QCardSection, QCardActions, QDrawer, QForm, QHeader,
    QIcon, QImg, QInput, QItem, QItemSection, QItemLabel, QLayout, QList, QPage, QPageContainer, QRating,
    QRouteTab, QSelect, QSeparator, QSpinner, QTab, QTabs, QTime, QToolbar, QToolbarTitle, QDialog, VueQrcodeReader
		// for spinner
    // QSpinnerAudio,
    // QChipsInput
  },
  directives: {
    ClosePopup
  },
  plugins: {
  },
  pwa: {
		manifest: {
			name: 'Quaquee',
			short_name: 'Quaquee',
			description: 'Quee Management System',
			icons: [
				{
					'src': 'statics/icons/icon-128x128.png',
					'sizes': '128x128',
					'type': 'image/png'
				},
				{
					'src': 'statics/icons/icon-192x192.png',
					'sizes': '192x192',
					'type': 'image/png'
				},
				{
					'src': 'statics/icons/icon-256x256.png',
					'sizes': '256x256',
					'type': 'image/png'
				},
				{
					'src': 'statics/icons/icon-384x384.png',
					'sizes': '384x384',
					'type': 'image/png'
				},
				{
					'src': 'statics/icons/icon-512x512.png',
					'sizes': '512x512',
					'type': 'image/png'
				}
			],
			display: 'standalone',
			orientation: 'portrait',
			background_color: '#ffffff',
			theme_color: '#027be3'
		}
  }
 })
