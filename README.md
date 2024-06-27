# MyToken Smart Contract

This repository contains the Solidity smart contract for `MyToken`, an ERC-20-like token implementation with minting and burning capabilities.

## Description

`MyToken` is a simple token contract that allows the creation (`mint`) and destruction (`burn`) of tokens. It maintains a mapping of addresses to their balances and ensures the total supply of tokens is accurately tracked.

## Features

- **Token Details**: Public variables to store the token's name, abbreviation, and total supply.
- **Balances Mapping**: Keeps track of the balance of each address.
- **Minting**: Allows the creation of new tokens, increasing both the total supply and the balance of a specified address.
- **Burning**: Allows the destruction of tokens, decreasing both the total supply and the balance of a specified address. Includes a check to ensure sufficient balance before burning.

## Contract Details

- **Solidity Version**: 0.8.18
- **License**: MIT

## Contract Code

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MyToken {

    // Public variables
    string public tokenName = "MyToken";
    string public tokenAbbrv = "MTK";
    uint256 public totalSupply;

    // Mapping of addresses to balances
    mapping(address => uint256) public balances;

    // Mint function
    function mint(address _address, uint256 _value) public {
        totalSupply += _value;
        balances[_address] += _value;
    }

    // Burn function
    function burn(address _address, uint256 _value) public {
        require(balances[_address] >= _value, "Balance is not sufficient to burn");
        totalSupply -= _value;
        balances[_address] -= _value;
    }
}
