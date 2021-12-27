describe('Cadastro', ()=>{
    it('Usuário deve se tornar um entregador', ()=>{
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')

        var entregador ={ 
            nome: "Yuri Anderson",
            cpf: "111.222.333.65",
            email:'yuri@teste.com',
            whatsapp:' 1199999999',
            endereco:{
                cep:'04534011',
                rua: 'Rua Joaquim Floreano',
                numero:'1000',
                complemento:'Ap 201',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            }

        }
        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
        
    })
})