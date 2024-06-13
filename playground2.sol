

// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MyToken {

// Public variables
        string public tokenName = "MyToken";
            string public tokenAbbrv = "MTK";
…// Burn function
                                                            function burn(address _address, uint256 _value) public {
                                                                    require(balances[_address] >= _value, "Balance is not sufficient to burn");
                                                                            totalSupply -= _value;
                                                                                    balances[_address] -= _value;
                                                                                        }
                                                                                        }
