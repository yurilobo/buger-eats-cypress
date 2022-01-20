import  signup from '../pages/SignupPages'
import SignupFactory from '../factories/SignupFactory'
import SignupPages from '../pages/SignupPages'

describe('Singup', ()=>{

    /*beforeEach(function(){
        cy.fixture('deliver').then((d)=>{
            this.deliver=d
        })
    })
    */
    it.skip('User should be deliver', function(){

        var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })
    it.skip('Incorrect document', function(){
        var deliver = SignupFactory.deliver()
        
        deliver.cpf='000000aa131'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
       
       signup.alertMessageShouldBe('Oops! CPF inválido')
    })
    it.skip('Incorrect email', function(){
        var deliver = SignupFactory.deliver()

        deliver.email='email.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
       
       signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })
    it('Require fields', function(){
        signup.go()
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Selecione o método de entrega')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    })


})