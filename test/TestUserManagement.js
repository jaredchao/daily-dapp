const UserManagement = artifacts.require("UserManagement");

contract("UserManagement", accounts => {
    let userManagementInstance;

    before(async () => {
        userManagementInstance = await UserManagement.deployed();
    });

    it("should allow a user to register and update their nickname", async () => {
        const account = accounts[0];
        await userManagementInstance.registerOrUpdateUser("TestNickname", { from: account });
        const user = await userManagementInstance.getUserInfo(account);
        
        assert.equal(user.registered, true, "User should be registered");
        assert.equal(user.nickname, "TestNickname", "Nickname should be updated");
    });
   
});
