describe('Homepage Test', () => {
    it('Should load the homepage and check for a title', () => {
        cy.visit('http://localhost:8081'); // Replace with your actual dev URL
        cy.contains('Dimension'); // Adjust text to match content on your homepage
    });
});
