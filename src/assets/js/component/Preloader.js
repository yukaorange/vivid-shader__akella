import Component from '@js/class/Component'
import each from 'lodash/each'
import GSAP from 'gsap'
import { TextureLoader } from 'three'

export default class Preloader extends Component {
  constructor({ assets }) {
    super({
      element: '.preloader',
      elements: {
        loading: '.preloader__loading',
        text: '.preloader__text',
        assets: '.preloader__assets'
      }
    })

    this.assets = assets

    this.length = 0

    this.createLoader()
  }

  createLoader() {
    this.images = [...this.elements.assets.querySelectorAll('img')]

    this.totalAssetsLength = this.images.length

    this.textureLoader = new TextureLoader()

    this.images.forEach(imageDom => {
      const image = new Image()

      const id = imageDom.getAttribute('data-id')

      image.crossOrigin = 'anonymous'

      image.src = imageDom.getAttribute('data-src')

      image.onload = () => {
        const texture = this.textureLoader.load(image.src)

        texture.needsUpdate = true

        this.assets.textures[id] = texture

        this.onAssetLoaded()
      }

      image.onerror = error => {
        console.error('An error happened while loading a texture', error)
      }
    })
  }

  onAssetLoaded() {
    this.length += 1

    const percent = this.length / this.totalAssetsLength

    this.elements.text.innerHTML = `${Math.round(percent * 100)}%`

    if (this.length === this.totalAssetsLength) {
      this.onLoaded()
    }
  }

  onLoaded() {
    return new Promise(resolve => {
      this.emit('completed')

      this.destroy()

      resolve()
    })
  }

  /**
   * destroy
   */

  destroy() {
    this.element.parentNode.removeChild(this.element)
  }
}
