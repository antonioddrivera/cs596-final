// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransactionRating {
    struct Rating {
        address rater; 
        uint256 rating; 
    }
    
    mapping(bytes32 => Rating[]) public transactionRatings;

    function rateTransaction(bytes32 txHash, uint256 rating) external {
        require(rating >= 1 && rating <= 5, "Invalid rating value");
        
        transactionRatings[txHash].push(Rating(msg.sender, rating));
    }

    function getAverageRating(bytes32 txHash) external view returns (uint256) {
        Rating[] storage ratings = transactionRatings[txHash];
        uint256 totalRating = 0;
        
        for (uint256 i = 0; i < ratings.length; i++) {
            totalRating += ratings[i].rating;
        }

        if (ratings.length > 0) {
            return totalRating / ratings.length;
        } else {
            return 0;
        }
    }
}
