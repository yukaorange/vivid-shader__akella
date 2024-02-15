import Page from '../../class/Page'

export default class Page3 extends Page {
  constructor() {
    super({
      id: 'page3',
      element: '.page3',
      elements: {
        link: '.page3__link'
      }
    })
  }

  create() {
    super.create()
  }

  destroy() {
    super.destroy()
  }
}
