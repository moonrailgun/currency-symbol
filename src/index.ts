const currencyMap: Record<string, string> = {
  USD: '$',
  AED: 'AED',
  EGP: 'E£',
  EUR: '€',
  AUD: '$',
  PKR: 'Rs',
  BRL: 'R',
  BGN: 'BGN',
  PLN: 'zł',
  DKK: 'kr',
  RUB: '₽',
  PHP: '₱',
  COP: '$',
  KZT: '₸',
  KRW: '₩',
  CAD: '$',
  CZK: 'Kč',
  QAR: 'QAR',
  RON: 'lei',
  MYR: 'RM',
  PEN: 'PEN',
  MXN: '$',
  ZAR: 'R',
  NGN: '₦',
  NOK: 'kr',
  JPY: '¥',
  SEK: 'kr',
  CHF: 'CHF',
  SAR: 'SAR',
  TWD: 'NT',
  THB: '฿',
  TZS: 'TZS',
  TRY: '₺',
  HKD: '$',
  SGD: '$',
  NZD: '$',
  HUF: 'Ft',
  ILS: '₪',
  INR: '₹',
  IDR: 'Rp',
  GBP: '£',
  VND: '₫',
  CLP: '$',
  CNY: '¥',
};

/**
 * transform currency to matched symbol
 *
 * @example
 * usd => $
 */
export function currencyToSymbol(currency: string) {
  return currencyMap[String(currency).toUpperCase()] ?? '$';
}
