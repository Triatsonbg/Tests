describe('Homepage Test', () => {
    it('Should load the homepage and check for a title - dev', () => {
        cy.visit('http://localhost:8081'); // Replace with your actual dev URL
        cy.contains('Dimension'); // Adjust text to match content on your homepage
    });
});
describe('Homepage Intro Test', () => {
    it('Should load the homepage and check for a Test - dev', () => {
        cy.visit('http://localhost:8081'); // Replace with your actual dev URL
        cy.contains('Intro'); // Adjust text to match content on your homepage
    });
});
