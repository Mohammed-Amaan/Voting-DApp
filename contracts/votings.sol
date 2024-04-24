// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;
contract votings{
    address owner;
    constructor(){
        owner=msg.sender;
    }
    struct Candidate{
        uint256 id;
        //address candidateAddress;
        uint256 totalVotes;
    }
    mapping(uint256 => Candidate)candidates;

    function addCandidate(uint256 _id)external onlyOwner{
        candidates[_id]=Candidate(_id,0);
    }
    function giveVote(uint256 _id)external{
        candidates[_id].totalVotes++;
    }
    function viewVotes(uint256 _id)public view returns(uint256){
        return candidates[_id].totalVotes;
    }
    modifier onlyOwner(){
        require(owner==msg.sender,'Not an owner');
        _;
    }
}
