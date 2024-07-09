const usersData = require('../test-data/users.json')
const {validateUserDataFromSingleUser, validateUserDataFromAllUsers} = require ('../utilities/validate-users-data')

describe('API Testing', () => {
    it(`Get user with id ${usersData.user5.id} from all users`, () => {
        cy.request('/users').then((allUsersResponse) => {
            expect(allUsersResponse.status).to.equal(200);
            const users = allUsersResponse.body;
            const userWithId5FromAllUsers = users.find(user => user.id === usersData.user5.id);
            validateUserDataFromAllUsers(userWithId5FromAllUsers, usersData.user5);
});
    });

        it(`Get user with id ${usersData.user5.id} from single user endpoint`, () => {
            cy.request('/users/5').then((singleUserResponse) => {
                expect(singleUserResponse.status).to.equal(200);
                const userWithId5FromSingleUser = singleUserResponse.body;
                validateUserDataFromSingleUser(userWithId5FromSingleUser, usersData.user5);
            });
        });
    });

