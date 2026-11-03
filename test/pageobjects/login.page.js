export class LoginPage {
    get loginButton() {
        return '~test-LOGIN'
    }

    get productsTitle() {
        return 'android=new UiSelector().text("PRODUCTS")'
    }

    get usernameInput() {
        return '~test-Username'
    }

    get passwordInput() {
        return '~test-Password'
    }
}

export default new LoginPage()