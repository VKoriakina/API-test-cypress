const postsData = require('../test-data/posts.json')
const { generateRandomText, generateRandomNumber } = require('../utilities/random');
const {validatePostData, validateCreatedPost} = require("../utilities/validate-post-data");

describe('API Testing', () => {
    it('Get all posts', () => {
        cy.request('GET', '/posts')
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body).to.have.length.greaterThan(0);
            })
    })

    it(`Get post with valid ID ${postsData.posts.valid.id}`, () => {
        cy.request('GET', `/posts/${postsData.posts.valid.id}`)
            .then((response) => {
                expect(response.status).to.equal(200)
                validatePostData(response.body, postsData.posts.valid)
            })
    })

    it(`Get post with invalid ID ${postsData.posts.invalid.id} - should return 404 with empty body`, () => {
        cy.request({
            method: 'GET',
            url: `/posts/${postsData.posts.invalid.id}`,
            failOnStatusCode: false
        })
            .then((response) => {
                expect(response.status).to.equal(404);
                expect(response.body).to.eql({});
            });
    });

    it('Create a new post', () => {
        const randomTitle = generateRandomText(10);
        const randomBody = generateRandomText(20);
        const randomUserId = generateRandomNumber(3);
        cy.request({
            method: 'POST',
            url: '/posts',
            body: {
                title: randomTitle,
                body: randomBody,
                userId: randomUserId,
            }
        }).then((response) => {
            expect(response.status).to.equal(201);
            const responseBody = response.body;
            validateCreatedPost(responseBody, { title: randomTitle, body: randomBody, userId: randomUserId });
            cy.log(JSON.stringify(responseBody));
        });
    });
});