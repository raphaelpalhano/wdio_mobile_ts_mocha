declare namespace WebdriverIO {
  interface Browser {
      browserLogin: (input: object) => Promise<void>
      getInput: (inputSelector: string) => import('webdriverio').ChainablePromiseElement<WebdriverIO.Element>
      setupApp: () => Promise<void>
  }

  interface MultiRemoteBrowser {
      browserCustomCommand: (arg: any) => Promise<void>
  }

  interface Element {
      elementCustomCommand: (arg: any) => Promise<number>
  }
}