import { getAddress } from '@ethersproject/address'

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value) {
    try {
        return getAddress(value)
    } catch {
        return false
    }
}

// Map the chain ID to a prefix for etherscan links
const ETHERSCAN_PREFIXES = {
    1: '',
    3: 'ropsten.',
    4: 'rinkeby.',
    5: 'goerli.',
    42: 'kovan.'
}

// Take the chain ID and data and return a formatted etherscan link
export function getEtherscanLink(chainId, data, type) {
    const prefix = `https://${ETHERSCAN_PREFIXES[chainId] || ETHERSCAN_PREFIXES[1]}etherscan.io`

    switch (type) {
        case 'transaction': {
            return `${prefix}/tx/${data}`
        }
        case 'token': {
            return `${prefix}/token/${data}`
        }
        case 'block': {
            return `${prefix}/block/${data}`
        }
        case 'address':
        default: {
            return `${prefix}/address/${data}`
        }
    }
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address, chars = 4) {
    const parsed = isAddress(address)
    if (!parsed) {
      throw Error(`Invalid 'address' parameter '${address}'.`)
    }
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
  }

// return a human readable version of the current network
export function getNetworkName(chainId) {
    switch (chainId) {
        case 1:
            return "Main Ethereum Network";
        case 2:
            return "Morden Test Network";
        case 3:
            return "Ropsten Test Network";
        case 4:
            return "Rinkeby Test Network";
        case 42:
            return "Kovan Test Network";
        default:
            return "Unknown Ethereum Network";
    }
}