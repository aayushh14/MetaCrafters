

// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MyToken {

// Public variables
        string public tokenName = "MyToken1";
            string public tokenAbbrv = "MTK";
…// Burn function
                                                            function burn(address _address, uint256 _value) public {
                                                                    if ((balances[_address] >= _value)){
                                                                            totalSupply -= _value;
                                                                                    balances[_address] -= _value;
                                                                                        }
                                                                                        }
}
