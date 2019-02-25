import ScrollFixedHeaderComponent from './scrollFixedHeader.vue'

const ScrollFixedHeader = {
  install(Vue, options) {
    Vue.component('ScrollFixedHeader', {
      mixins: [ScrollFixedHeaderComponent],
      props: {
        threshold: {
          type: Number,
          default: 0
        },
        fixed: {
          type: Boolean,
          default: false
        }
      },
      data() {
        return {
          tag: null, // target html tag
          check: null,
          $: null
        }
      },
      mounted () {
        this.$ = (e) => document.querySelector(e)
        this.tag = this.getTargetTag()
        this.scrollCheck()
      },
      methods: {
        /**
         * Get the current browser supported html tag for watching scroll status
         * @returns {string}
         */
        getTargetTag() {
          // sougou browser support
          if (navigator.userAgent.toLowerCase().indexOf('se 2.x') > -1) {
            return 'body'
          }
          // edge brower support
          if (navigator.userAgent.includes('Edge'))
            return 'body'
          // firefox browser support
          if (navigator.userAgent.includes('Firefox/') && ((+navigator.userAgent.split('Firefox/')[1]) >= 62)) {
            return 'html'
          }
          // chrome browser support
          if (!window.chrome &&
            'WebkitAppearance' in document.documentElement.style)
            return 'body'
          return 'html'
        },
        /**
         * Check for current scroll top height has past the threshold
         */
        scrollCheck () {
          this.check = () => {
            const { $, tag, threshold } = this
            if (!tag) {
              return;
            }
            this.$emit('update:fixed', $(tag).scrollTop > threshold)
          }
          this.registerScrollEvent()
        },
        /**
         * Register scroll listening event
         */
        registerScrollEvent () {
          window.addEventListener('scroll', this.check)
        },
        /**
         * Remove scroll listening event
         */
        removeScrollEvent () {
          window.removeEventListener('scroll', this.check)
        }
      },

      beforeDestroy() {
        this.removeScrollEvent();
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ScrollFixedHeader)
}

export default ScrollFixedHeader
