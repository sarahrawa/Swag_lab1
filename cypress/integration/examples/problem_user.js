describe("the swag lab",()=>{
it("log in the problem user",()=>{

    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

})

})