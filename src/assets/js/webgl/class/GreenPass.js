import PostProcessPass from './PostProcessPass'
import { WebGLRenderTarget } from 'three'

import GreenFragment from '../../shaders/green-fragment.glsl'
import vertex from '../../shaders/post-vertex.glsl'

export default class GreenPass extends PostProcessPass {
  constructor() {
    super({
      fragment: GreenFragment,
      vertex: vertex,
      renderTarget: new WebGLRenderTarget(window.innerWidth, window.innerHeight)
    })
  }
}
