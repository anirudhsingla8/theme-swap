describe('BS', () => {
    it('Running test cases', () => {
        expect(true).to.equal(true)
    })
})

describe('Local', () => {
    it('page successfully loads', () => {
        cy.visit('/index.html')
    })
})

describe('Local', () => {
    it('Checking text', () => {
        cy.get('p').contains('I am a Newton School student, ready to become an awesome full stack developer')
    })
})


describe('Local', () => {
    it('theme swap', () => {
        cy.get('div').should('have.id','app')
        cy.get('div').should('have.class','day')
    })
})


describe('Local', () => {
    it('theme swap', () => {
        cy.get('button').should('have.id','swap')
        cy.get('button').should('have.class','button_day')
    })
})



describe('Local', () => {
    it('theme swap', () => {
        cy.get('button').click().then(()=>{
            cy.get('#app').should('have.class','night')
            cy.get('#swap').should('have.class','button_night')
        })
    })
})


describe('Local', () => {
    it('theme swap', () => {
        cy.get('button').click().then(()=>{
            cy.get('#app').should('have.class','day')
            cy.get('#swap').should('have.class','button_day')
        })
    })
})