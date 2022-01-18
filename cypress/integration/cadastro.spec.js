import SignupPage from '../pages/SignupPages'
import Signup from '../pages/SignupPages'
import  signup from '../pages/SignupPages'

describe('Cadastro', ()=>{

    beforeEach(function(){
        cy.fixture('deliver').then((d)=>{
            this.deliver=d
        })
    })
    
    it('Usuário deve se tornar um entregador', function(){
        
       

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })
    it('CPF invalido', function(){
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')

           
        

        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
       
       signup.alertMessageShouldBe('Oops! CPF inválido')
    })

})