import Page from "@js/class/Page";

export default class Page2 extends Page {
  constructor() {
    super({
      id: "page2",
      element: ".page2",
      elements: {
        link: ".page2__link",
      },
    });
  }

  create() {
    super.create();
  }

  destroy() {
    super.destroy();
  }
}
