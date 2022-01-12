import SignupPage from '../pages/SignupPages'
import Signup from '../pages/SignupPages'

describe('Cadastro', ()=>{

    before(function(){
        cy.log('Tudo aqui é executado uma única vez ANTES de todos os casos de testes')
    })
    beforeEach(function(){
        cy.log('Tudo aqui é executado uma única vez ANTES para cada caso de testes')
    })
    after(function(){
        cy.log('Tudo aqui é executado uma única vez DEPOIS de todos os casos de testes')
    })
    afterEach(function(){
        cy.log('Tudo aqui é executado uma única vez DEPOIS para cada caso de testes')
    })

    it('Usuário deve se tornar um entregador', ()=>{
        

        var deliver ={ 
            name: "Yuri Anderson",
            cpf: "08709260048",
            email:'yuri@teste.com',
            whatsapp:' 1199999999',
            address:{
                postalcode:'04534011',
                street: 'Rua Joaquim Floriano',
                number:'1000',
                details:'Ap 201',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg'

        }
        
        var signup =new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })
    it('CPF invalido', ()=>{
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')

        var deliver ={ 
            name: "Yuri Anderson",
            cpf: "087092600aa",
            email:'yuri@teste.com',
            whatsapp:' 1199999999',
            address:{
                postalcode:'04534011',
                street: 'Rua Joaquim Floriano',
                number:'1000',
                details:'Ap 201',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
            
        var signup =new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
       
       signup.alertMessageShouldBe('Oops! CPF inválido')
    })

})