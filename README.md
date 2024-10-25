## Easy Currency Symbol

Quick swicth currency code to symbol.

Base currency mapping is from apple connect.

## Usage

```ts
import { currencyToSymbol } from 'easy-currency-symbol'

currencyToSymbol('USD') // return $
currencyToSymbol('EUR') // return €
```

## Why we need it.

Many economic systems(for example: apple iap, stripe, etc.) return currency codes to business services, but it is more user-friendly to display them as symbols. However, the current node ecosystem does not have a library that meets expectations, so we quickly created this library to make this easier.
