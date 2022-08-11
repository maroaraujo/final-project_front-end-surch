describe('Make sure all home components render correctly', () => {
  it('passes', () => {
    cy.viewport(400, 900) // Set viewport to 550px x 750px
    cy.visit('https://reconnect-surch.netlify.app/welcome')
    cy.get('.welcome_getstarted___H1Yo').click();
    cy.get('[alt="great"]').click();
    cy.url('https://reconnect-surch.netlify.app/moodtracker')
    cy.get('.Home_moodStateContainerSelected__zPxvR').should("have.css", "color", "rgb(37, 78, 123)")

    cy.get('.moodtracker_input__2aYg5').should("have.value", "why").click().type("Cypress is working!")
    //cy.get('.Home_main__nLjiQ > :nth-child(9)').type("Kind of");
  })
})