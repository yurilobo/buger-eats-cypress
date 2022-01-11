describe('Cadastro', ()=>{
    it('Usuário deve se tornar um entregador', ()=>{
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')

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
        //para fazer upload de imagem "npm install cypress-file-upload --save-dev"
        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)
        

        cy.get('input[name="address"]').should('have.value',deliver.address.street)
        cy.get('input[name="district"]').should('have.value',deliver.address.district )
        cy.get('input[name="city-uf"]').should('have.value',deliver.address.city_state)
        
        cy.contains('.delivery-method li', deliver.deliver_method).click()

        //imagem 
        //Observação sobre os localizadores[name^="city-uf"] quando usamos ^ -trazemos o que começa com o localizador usado
        //quando usamos $ o que termina e quando usamos * com todos.
        cy.get('input[accept^="image"]').attachFile('/images/'+deliver.cnh)

      cy.get('form button[type="submit"]').click()
        

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        // cy.get('div[class=swal2-html-container]')
            
       cy.get('.swal2-container .swal2-html-container')
        .should('have.text', expectedMessage)
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
        
        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)
        

        cy.get('input[name="address"]').should('have.value',deliver.address.street)
        cy.get('input[name="district"]').should('have.value',deliver.address.district )
        cy.get('input[name="city-uf"]').should('have.value',deliver.address.city_state)
        
        cy.contains('.delivery-method li', deliver.deliver_method).click()

        
        cy.get('input[accept^="image"]').attachFile('/images/'+deliver.cnh)

         cy.get('form button[type="submit"]').click()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
        

       
    })

})