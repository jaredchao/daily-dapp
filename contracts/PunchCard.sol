// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract PunchCard is Initializable, OwnableUpgradeable {

    ERC20Upgradeable private dkbToken;

    function initialize() public initializer {
      __Ownable_init(msg.sender);
      dkbToken = ERC20Upgradeable(msg.sender);
    }

    struct PunchRecord {
        uint256 timestamp; // UTC时间戳
    }

    mapping(address => PunchRecord[]) public userPunchRecords;

    // 打卡事件，方便前端跟踪
    event Punch(address indexed user, uint256 timestamp);

    // 获取东八区当前日期的函数
    function getCurrentDateInUTC8() public view returns (uint256) {
        // 将当前UTC时间戳转换为东八区时间，并计算当前日期
        uint256 dayCount = (block.timestamp + 8 hours) / 1 days;
        return dayCount;
    }

    // 获取用户上次打卡的日期
    function getLastPunchDateInUTC8(address user) public view returns (uint256) {
        require(userPunchRecords[user].length > 0, "No punch records found for this user.");
        uint256 lastPunchTimestamp = userPunchRecords[user][userPunchRecords[user].length - 1].timestamp;
        uint256 dayCount = (lastPunchTimestamp + 8 hours) / 1 days;
        return dayCount;
    }

    // 执行打卡操作
    function punch() public {
        // 如果是用户首次打卡或者上次打卡不是今天（东八区时间），则允许打卡
        require(userPunchRecords[msg.sender].length == 0 || 
                getCurrentDateInUTC8() > getLastPunchDateInUTC8(msg.sender), 
                "You have already punched in today.");

        // 记录打卡时间（UTC时间戳）和IPFS CID
        userPunchRecords[msg.sender].push(PunchRecord(block.timestamp));

        // 触发打卡事件
        emit Punch(msg.sender, block.timestamp);
    }

    // 获取用户打卡记录的数量
    function getUserPunchCount(address user) public view returns (uint256) {
        return userPunchRecords[user].length;
    }

    // 获取用户的最后一次打卡记录
    function getLastPunch(address user) public view returns (uint256 timestamp) {
        require(userPunchRecords[user].length > 0, "No punch records found for this user.");
        PunchRecord memory lastRecord = userPunchRecords[user][userPunchRecords[user].length - 1];
        return (lastRecord.timestamp);
    }
  
    // 获取用户的所有打卡记录
    function getUserPunchRecords(address user) public view returns (PunchRecord[] memory) {
        return userPunchRecords[user];
    }

    function pay(address user) public returns (bool) {
        bool rewardSuccess = dkbToken.transfer(user, 1 ether);
        return rewardSuccess;
    }
}
