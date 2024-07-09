function validatePostData(actualPost, expectedPost) {
    expect(actualPost.userId).to.equal(expectedPost.userId);
    expect(actualPost.id).to.equal(expectedPost.id);
    expect(actualPost.title).to.exist;
    expect(actualPost.title).to.not.be.empty;
    expect(actualPost.body).to.exist;
    expect(actualPost.body).to.not.be.empty;
}

function validateCreatedPost(actualPost, expectedPost) {
    expect(actualPost.title).to.equal(expectedPost.title);
    expect(actualPost.body).to.equal(expectedPost.body);
    expect(actualPost.userId).to.equal(expectedPost.userId);
    expect(actualPost.id).to.exist;
}

module.exports = { validatePostData, validateCreatedPost };
