import GSAP from 'gsap'

import { ShaderMaterial, Mesh } from 'three'
import * as THREE from 'three'

import vertex from '../../shaders/vertex.glsl'
import fragment from '../../shaders/fragment.glsl'

export default class Plane {
  constructor({ geometry, sizes, device }) {
    this.geometry = geometry

    this.sizes = sizes

    this.device = device

    this.createTexture()

    this.createMaterial()

    this.createMesh()

    this.calculateBounds({
      sizes: this.sizes,
      device: this.device
    })
  }

  createTexture() {
    // this.texture = window.TEXTURES[0]
  }

  createMaterial() {
    this.material = new ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      side: THREE.DoubleSide,
      uniforms: {
        // uTexture: { value: this.texture },
        uAlpha: { value: 0 }
      }
    })
  }

  createMesh() {
    this.mesh = new Mesh(this.geometry, this.material)
  }

  calculateBounds({ sizes, device }) {
    this.sizes = sizes

    this.device = device

    this.updateScale(this.device)

    this.updateX()

    this.updateY()
  }

  /**
   * Animations
   */
  show() {
    GSAP.fromTo(
      this.mesh.material.uniforms.uAlpha,
      {
        value: 0
      },
      {
        value: 1
      }
    )
  }

  hide() {
    GSAP.to(this.mesh.material.uniforms.uAlpha, {
      value: 0
    })
  }
  /**
   * events
   */
  onResize(value) {
    this.calculateBounds(value)
  }

  /**
   * update
   */

  updateScale() {
    // console.log('plane device : ', this.device)

    if (this.device === 'sp') {
      this.mesh.scale.x = this.sizes.width / 2

      this.mesh.scale.y = this.sizes.width / 2
    } else {
      this.mesh.scale.x = this.sizes.height / 2

      this.mesh.scale.y = this.sizes.height / 2
    }
  }

  updateX(x = 0) {}

  updateY(y = 0) {}

  update(scroll, speed) {
    this.updateX(scroll.x)

    this.updateY(scroll.y)

    this.program.uniforms.uSpeed.value = speed
  }

  setParameter(params) {
    this.mesh.material.uniforms.uAlpha.value = params.alpha
  }
}
