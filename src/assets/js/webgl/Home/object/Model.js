import GSAP from 'gsap'

import * as THREE from 'three'

import vertex from '@js/shaders/vertex.glsl'
import fragment from '@js/shaders/fragment.glsl'

export default class Model {
  constructor({ sizes, device, assets }) {
    this.sizes = sizes

    this.device = device

    this.assets = assets

    this.createTexture()

    this.createMaterial()

    this.cretateGeometry()

    this.createMaterial()

    this.calculateBounds({
      sizes: this.sizes,
      device: this.device
    })

    this.updateScale(this.device)
  }

  createTexture() {
    this.texture = this.assets.textures[3] //hologram
  }

  cretateGeometry() {
    this.model = this.assets.models.model.scene

    this.model.traverse(object => {
      if (object.isMesh) {
        const size = 0.01

        object.scale.set(size, size, size)

        object.geometry.center()

        object.material = this.material
      }
    })
  }

  createMaterial() {
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      side: THREE.DoubleSide,
      uniforms: {
        uTexture: { value: this.texture },
        uAlpha: { value: 0 },
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uResolution: { value: new THREE.Vector2() }
      }
    })

    // this.material.needsUpdate = true
  }

  calcBoxToCenter() {
    this.box = new THREE.Box3().setFromObject(this.model)

    this.boundingSize = new THREE.Vector3()

    this.box.getSize(this.boundingSize)

    this.model.position.set(0, -this.boundingSize.y / 2, 0)
  }

  calculateBounds({ sizes, device }) {
    this.sizes = sizes

    this.device = device

    this.updateX()

    this.updateY()

    this.updateScale()
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

    this.updateScale(this.device)
  }

  /**
   * update
   */

  updateScale() {
    this.model.traverse(object => {
      if (object.isMesh) {
        object.material.uniforms.uResolution.value.x = window.innerWidth

        object.material.uniforms.uResolution.value.y = window.innerHeight
      }
    })
  }

  updateX(x = 0) {}

  updateY(y = 0) {}

  update({ scroll, time, params, flag }) {
    this.updateX(scroll.x)

    this.updateY(scroll.y)

    this.material.uniforms.uTime.value = time.current

    this.model.traverse(object => {
      if (object.isMesh) {
        object.material.uniforms.uTime.value = time.current

        object.material.uniforms.uProgress.value = params.progress
      }
    })
  }
}
