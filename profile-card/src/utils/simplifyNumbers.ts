export function simplifyNumber (num: number): string {
  return num > 999 ? `${Math.sign(num) * (num / 1000).toFixed(1)}K` : `${num}`
}
