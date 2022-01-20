export default {
    deliver: function () {
        var data = {
            name: 'Yuri Anderson',
            cpf: '08709260048',
            email: 'yuri@teste.com',
            whatsapp: ' 1199999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 201',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}