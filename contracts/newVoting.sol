// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;
contract newVoting{
    address owner;
    constructor(){
        owner=msg.sender;
    }
    struct Candidate{
        uint256 id;
        uint256 totalVotes;
    }
    struct Voter{
        address voterAddress;
        bool isVoted;
    }
    mapping(uint256 => Candidate)candidates;
    mapping(address => Voter)public voters;

    function addCandidate(uint256 _id)external onlyOwner{
        candidates[_id]=Candidate(_id,0);
    }
    function addVoter(address _voterAddress)external onlyOwner{
        voters[_voterAddress]=Voter(_voterAddress,false);
    }
    function giveVote(uint256 _id)external onlyVoter onlyOneVote{
        candidates[_id].totalVotes++;
        voters[msg.sender].isVoted=true;
    }
    function viewVotes(uint256 _id)public view returns(uint256){
        return candidates[_id].totalVotes;
    }
    modifier onlyOwner(){
        require(owner==msg.sender,"Only Owner can enroll candidates");
        _;
    }
    modifier onlyVoter(){
        require(voters[msg.sender].voterAddress!=address(0),"Only Voters can vote");
        _;
    }
    modifier onlyOneVote(){
        require(voters[msg.sender].isVoted==false,"Only one vote is allowed");
        _;
    }
}