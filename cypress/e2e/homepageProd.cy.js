describe('Homepage Test', () => {
    it('Should load the homepage and check for a title - prod', () => {
        cy.visit('http://localhost'); // Replace with your actual dev URL
        cy.contains('Dimension'); // Adjust text to match content on your homepage
    });
});
describe('Homepage Intro Test', () => {
    it('Should load the homepage and check for a Test - prod', () => {
        cy.visit('http://localhost'); // Replace with your actual dev URL
        cy.contains('Intro'); // Adjust text to match content on your homepage
    });
});