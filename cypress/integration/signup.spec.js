import SignupPage from '../pages/SignupPages'
import Signup from '../pages/SignupPages'
import  signup from '../pages/SignupPages'

describe('Singup', ()=>{

    beforeEach(function(){
        cy.fixture('deliver').then((d)=>{
            this.deliver=d
        })
    })
    
    it('User should be deliver', function(){
        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })
    it('Incorrect document', function(){
        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
       
       signup.alertMessageShouldBe('Oops! CPF inválido')
    })
    it('Incorrect email', function(){
        signup.go()
        signup.fillForm(this.deliver.email_inv)
        signup.submit()
       
       signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

})