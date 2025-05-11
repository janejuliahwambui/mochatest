const {assert} = require ('chai');
const password = require ('./password');



describe ("Tests", ( ) => {
    it("test",() => {
        assert.strictEqual(password("Abcd1234"), true);
        assert.strictEqual(password("Abcd123"), false);
        assert.strictEqual(password("acd1234"), false);
        assert.strictEqual(password("Abcgejrkwhoiewdhgoirwehoig12345678"), true);
         assert.strictEqual(password("ABCD1234"), false);
    });
});