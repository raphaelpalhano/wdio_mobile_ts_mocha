class AppCapabilities {
  private appId: string;
  private appUrl: string;


  public setAppId(android: string, ios: string){
    this.appId = driver.isAndroid === true ? android : ios;
  }

  get getAppId() {
    return this.appId;
  }


  public setAppUrl(android: string, ios: string){
    this.appUrl = driver.isAndroid === true ? android : ios;
  }
}

export default new AppCapabilities();