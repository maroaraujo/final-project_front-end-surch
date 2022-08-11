describe('Mood can be selected on homepage and all functions related work', () => {
  it('passes', () => {
    cy.viewport(400, 900) // Set viewport to 550px x 750px
    cy.visit('https://reconnect-surch.netlify.app/welcome')
    cy.get('.welcome_getstarted___H1Yo').click();
    cy.get('[alt="great"]').click();
    cy.url('https://reconnect-surch.netlify.app/moodtracker')
    cy.get('.Home_moodStateContainerSelected__zPxvR').should("have.css", "color", "rgb(37, 78, 123)")
    // check to have input field but both input field in moodtracker page needs distinct id
    cy.get('.moodtracker_input__2aYg5');
    cy.contains('SEND YOUR MOOD').click();
    cy.url("https://reconnect-surch.netlify.app/moodlog");
    cy.get('.moodlog_moodOfSelectedDate__YrauB')
    cy.get('[alt="hi"]')
  })
})