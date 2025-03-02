/* 先填写 .env.local */
import { InjectionKey } from 'vue'
import {createStore, useStore as baseUseStore, Store, ActionContext} from 'vuex'
import {State} from '../types/State'
import {isDark} from "../share/Time";
import language from '../assets/language.json'

const devmode = process.env.NODE_ENV === "development"
const basePath = !devmode ? import.meta.env.VITE_PRO_BASE_PATH : import.meta.env.VITE_DEV_BASE_PATH
const mediaPath = import.meta.env.VITE_MEDIA_PATH ? import.meta.env.VITE_MEDIA_PATH : basePath + '/api/v3/media/'
const twemojiBasePath = import.meta.env.VITE_TW_EMOJI_PATH//twemoji
const onlinePath = import.meta.env.VITE_ONLINE_PATH ? import.meta.env.VITE_ONLINE_PATH : ''
const forceOnlineMode = !(import.meta.env.VITE_DEV_BASE_PATH??import.meta.env.VITE_PRO_BASE_PATH??'')

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    now: new Date(),
    darkMode: isDark(),
    projects: [],
    names: {},
    topTweetId: "0",
    languageList: language as State["languageList"],
    links: [],
    home: true,
    project: "",
    title: "Twitter Monitor",
    tweets: [],
    translate: {},
    userExists: true,
    tweetMode: 'timeline',
    tweetType: 'all',
    updatedCharts: true,
    userInfo: {uid: '0', uid_str: "", name: "", display_name: "", header: "", banner: 0, following: 0, followers: 0, description: "", description_original: "", statuses_count: 0, top: "", locked: 0, deleted: 0, verified: 0, description_entities: [],},
    height: 0,
    width: 0,
    siteHeight: 0,
    viewportHeight: 0,
    altitudeDifference: 0,
    scrollBarWidth: 0,
    hasBeenSyncFromLocalStorage: false,
    devmode,
    forceOnline: forceOnlineMode,
    settings: {
      language: "zh-cn",//简体中文
      cookie_accept: false,
      displayPicture: false,
      autoLoadTweets: false,
      autoRefresh: false,
      onlineMode: false,
      loadConversation: false,
      basePath,
      mediaPath,
      translatorPlatform: 'google'
    },
    adminMode: false,
    image: {
      mode: 'photo',
      offset: 0,
      imageList: [],
    },
    userTimeZone: '',
    userList: [],
    //path
    samePath: false,
    realMediaPath: '',
    twemojiBasePath,
    onlinePath,
    translatorMode: false,
    spacesPlayer: {
      display: false,
      link: '',
      id: '',
      displayName: '',
      title: '',
      start: '0',
      end: '0'
    },
    bookmarks: []
  },
  getters: {
    getBasePath: (state): string => state.settings.basePath,
  },
  mutations: {
    setLanguage: (state, payload) => {
      state.settings.language = payload.lang
    },
    updateUserList: (state, payload) => state.userList = payload.users,
    updateNow: (state, payload) => state.now = payload.now,
    setTrueToHasBeenSyncFromLocalStorage: (state) => state.hasBeenSyncFromLocalStorage = true,
    setUserTimeZone: (state, payload) => state.userTimeZone = payload.userTimeZone,
    //browser
    updateBrowserSize: (state, payload) => {
      state.height = payload.height
      state.width = payload.width
      state.siteHeight = payload.siteHeight
      state.altitudeDifference = payload.altitudeDifference
      state.viewportHeight = payload.viewportHeight
      state.scrollBarWidth = payload.scrollBarWidth
    },
    //settings
    swapDisplayPictureStatus: (state) => state.settings.displayPicture = !state.settings.displayPicture,
    //updateDisplayPictureStatus: (state, payload) => state.settings.displayPicture = payload.status,
    updateSettingsItem: (state: State, payload: {key: keyof State["settings"]; value: string & boolean}) => {state.settings[payload.key] = payload.value},
    checkSamePath: (state) => state.samePath = (state.settings.basePath === state.settings.mediaPath),
    updateRealMediaPath: (state, payload) => state.realMediaPath = payload.realMediaPath,
    //set core data
    setCoreValue: <K extends keyof State>(state: State, payload: {key: K; value: State[K]}) => state[payload.key] = payload.value,
    //pushCoreValue: (state, payload) => state[payload.key] = state[payload.key].concat(payload.value),
    updateTweetsTranslate: (state, payload) => state.translate[payload.tweet_id] = payload.translate,
    updateSpacesPlayerItem: (state: State, payload: {key: keyof State["spacesPlayer"]; value: string & boolean}) => {
      if (state.spacesPlayer[payload.key] !== payload.value) {
        state.spacesPlayer[payload.key] = payload.value
      }
    },
    updateBookMarks: (state, payload) => {
      if (payload?.cleanAll) {
        state.bookmarks = []
      } else if (payload?.import) {
        state.bookmarks = payload.tweet
      } else if (state.bookmarks.filter(bookmark => bookmark.type === payload.tweet.type && bookmark.tweet_id === payload.tweet.tweet_id && bookmark.uid === payload.tweet.uid).length === 0) {
        state.bookmarks.push(payload.tweet)
      } else {
        state.bookmarks = state.bookmarks.filter(bookmark => bookmark.type !== payload.tweet.type || bookmark.tweet_id !== payload.tweet.tweet_id || bookmark.uid !== payload.tweet.uid)
      }
    }
  },
  actions: {
    setLanguage: function (context, payload: {lang: string}) {
      context.commit({
        type: 'setLanguage',
        lang: ((lang: string) => {
          if (/^(?:zh|zh-cn|zh-sg|zh-hans)$/.test(lang)) {
            return 'zh-cn'
          } else if (/^(?:zh-tw|zh-hk|zh-mo|zh-hant)$/.test(lang)) {
            return 'zh-tw'
          } else if (/^(?:ja|ja-jp)$/.test(lang)) {
            return 'ja'
          } else if (/^(?:ko|ko-kp)$/.test(lang)) {
            return 'ko'
          } else {
            return 'en'
          }
        })(payload.lang)
      })
    },
    updateUserList: function (context) {
      let users: State["userList"] = [];
      for (let project in context.state.names) {
        for (let group in context.state.names[project]) {
          for (let member of context.state.names[project][group]) {
            users.push({
              name: member.name,
              display_name: member.display_name,
              project: project,
              tag: group
            })
          }
        }
      }
      context.commit({type: 'updateUserList', users})
    },
    updateNow: (context) => context.commit({type: 'updateNow', now: new Date()}),
    setTrueToHasBeenSyncFromLocalStorage: (context) => context.commit('setTrueToHasBeenSyncFromLocalStorage'),
    setUserTimeZone: (context) => {
      let timeValue = (new Date().getTimezoneOffset() / 60) * (-1);
      context.commit({type: 'setUserTimeZone', userTimeZone: (timeValue >= 0 ? '+' + timeValue.toString() : timeValue.toString())})
    },
    //browser
    updateBrowserSize: (context, payload) => {
      context.commit({
        type: 'updateBrowserSize',
        height: payload.height,
        width: payload.width,
        siteHeight: payload.siteHeight,
        altitudeDifference: payload.altitudeDifference,
        viewportHeight: payload.viewportHeight,
        scrollBarWidth: payload.scrollBarWidth,
      })
    },
    //settings
    swapDisplayPictureStatus: (context) => context.commit('swapDisplayPictureStatus'),
    //updateDisplayPictureStatus: (context, payload) => context.commit('updateDisplayPictureStatus', {status: payload.status}),
    updateSettingsItem: (context: ActionContext<State, State>, payload: {key: keyof State["settings"]; value: string & boolean}) => context.commit('updateSettingsItem', {key: payload.key, value: payload.value}),
    checkSamePath: (context) => context.commit({type: 'checkSamePath'}),
    updateRealMediaPath: (context) => context.commit({type: 'updateRealMediaPath', realMediaPath: context.state.settings.mediaPath + (context.state.settings.mediaPath === context.state.settings.basePath ? '/api/v3/media/' : '')}),
    //set core data
    setCoreValue: <K extends keyof State>(context: ActionContext<State, State>, payload: {key: K; value: State[K]}) => context.commit('setCoreValue', {key: payload.key, value: payload.value}),
    pushCoreValue: (context: any, payload) => context.commit({type: 'setCoreValue', key: payload.key, value: context.state[payload.key].concat(payload.value)}),
    //TODO fix all any type
    updateTweetsTranslate: (context, payload) => context.commit("updateTweetsTranslate", {tweet_id: payload.tweet_id, translate: payload.translate}),
    updateSpacesPlayerItem: (context: ActionContext<State, State>, payload: {key: keyof State["spacesPlayer"]; value: string & boolean}) => context.commit('updateSpacesPlayerItem', {key: payload.key, value: payload.value}),
    updateBookMarks: (context, payload) => context.commit("updateBookMarks", payload),
  }
})

export function useStore () {
  return baseUseStore(key)
}
