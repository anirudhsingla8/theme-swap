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
    it('checking div id,class', () => {
        cy.get('div').should('have.id','app')
        cy.get('div').should('have.class','day')
    })
})


describe('Local', () => {
    it('checking button id,class', () => {
        cy.get('button').should('have.id','swap')
        cy.get('button').should('have.class','button_day')
    })
})



describe('Local', () => {
    it('checking swap theme', () => {
        cy.get('button').click().then(()=>{
            cy.get('#app').should('have.class','night')
            cy.get('#swap').should('have.class','button_night')
        })
    })
})


describe('Local', () => {
    it('checking swap theme', () => {
        cy.get('button').click().then(()=>{
            cy.get('#app').should('have.class','day')
            cy.get('#swap').should('have.class','button_day')
        })
    })
})