
declare global {
    var locators;
}

export const objectLocators = {

  android: {
    login: {
      username: '//android.widget.EditText[@text="Username"]',
      password: `//android.widget.EditText[@text="Password / Pin"]`,
      loginButton: `//android.widget.TextView[@text="Login"]`,
    },

  },

  iOs: {
    login: {
      username: '//ios.widget.EditText[@text="Username"]',
      password: `//ios.widget.EditText[@text="Password / Pin"]`,
      loginButton: `//ios.widget.TextView[@text="Login"]`,
    },


  
  }
    
};

