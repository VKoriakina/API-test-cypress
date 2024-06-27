describe('API Testing', () => {
    it('should successfully retrieve posts data', () => {
        cy.request('GET', '/posts')
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body).to.have.length.greaterThan(0);
            })
    })
})