
function validateUserDataFromAllUsers(userFromAllUsers, expectedUserData) {
    expect(userFromAllUsers).to.be.an('object');
    expect(userFromAllUsers.name).to.equal(expectedUserData.name);
    expect(userFromAllUsers.username).to.equal(expectedUserData.username);
    expect(userFromAllUsers.email).to.equal(expectedUserData.email);
    expect(userFromAllUsers.address.street).to.equal(expectedUserData.address.street);
    expect(userFromAllUsers.address.suite).to.equal(expectedUserData.address.suite);
    expect(userFromAllUsers.address.city).to.equal(expectedUserData.address.city);
    expect(userFromAllUsers.address.zipcode).to.equal(expectedUserData.address.zipcode);
    expect(userFromAllUsers.address.geo.lat).to.equal(expectedUserData.geo.lat);
    expect(userFromAllUsers.address.geo.lng).to.equal(expectedUserData.geo.lng);
    expect(userFromAllUsers.phone).to.equal(expectedUserData.phone);
    expect(userFromAllUsers.website).to.equal(expectedUserData.website);
    expect(userFromAllUsers.company.name).to.equal(expectedUserData.company.name);
    expect(userFromAllUsers.company.catchPhrase).to.equal(expectedUserData.company.catchPhrase);
    expect(userFromAllUsers.company.bs).to.equal(expectedUserData.company.bs);
}

function validateUserDataFromSingleUser(userFromSingleUser, expectedUserData) {
    expect(userFromSingleUser).to.be.an('object');
    expect(userFromSingleUser.id).to.equal(expectedUserData.id);
    expect(userFromSingleUser.name).to.equal(expectedUserData.name);
    expect(userFromSingleUser.username).to.equal(expectedUserData.username);
    expect(userFromSingleUser.email).to.equal(expectedUserData.email);
    expect(userFromSingleUser.address.street).to.equal(expectedUserData.address.street);
    expect(userFromSingleUser.address.suite).to.equal(expectedUserData.address.suite);
    expect(userFromSingleUser.address.city).to.equal(expectedUserData.address.city);
    expect(userFromSingleUser.address.zipcode).to.equal(expectedUserData.address.zipcode);
    expect(userFromSingleUser.address.geo.lat).to.equal(expectedUserData.geo.lat);
    expect(userFromSingleUser.address.geo.lng).to.equal(expectedUserData.geo.lng);
    expect(userFromSingleUser.phone).to.equal(expectedUserData.phone);
    expect(userFromSingleUser.website).to.equal(expectedUserData.website);
    expect(userFromSingleUser.company.name).to.equal(expectedUserData.company.name);
    expect(userFromSingleUser.company.catchPhrase).to.equal(expectedUserData.company.catchPhrase);
    expect(userFromSingleUser.company.bs).to.equal(expectedUserData.company.bs);
}

module.exports = { validateUserDataFromSingleUser, validateUserDataFromAllUsers };
