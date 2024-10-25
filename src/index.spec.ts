import { currencyToSymbol } from './index';
import { describe, test, expect } from 'vitest';

describe('currencyToSymbol', () => {
  test('should return $ for unknown currency', () => {
    expect(currencyToSymbol('UNKNOWN')).toEqual('$');
  });

  test('should return correct symbol for USD', () => {
    expect(currencyToSymbol('USD')).toEqual('$');
  });

  test('should return correct symbol for EUR', () => {
    expect(currencyToSymbol('EUR')).toEqual('€');
  });

  test('should return correct symbol for GBP', () => {
    expect(currencyToSymbol('GBP')).toEqual('£');
  });

  test('should return correct symbol for JPY', () => {
    expect(currencyToSymbol('JPY')).toEqual('¥');
  });

  test('should return correct symbol for CNY', () => {
    expect(currencyToSymbol('CNY')).toEqual('¥');
  });

  test('should return correct symbol for INR', () => {
    expect(currencyToSymbol('INR')).toEqual('₹');
  });

  test('should return correct symbol for AUD', () => {
    expect(currencyToSymbol('AUD')).toEqual('$');
  });

  test('should return correct symbol for CAD', () => {
    expect(currencyToSymbol('CAD')).toEqual('$');
  });
});
