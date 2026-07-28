export function buildWhatsAppUrl(
  phoneNumber: string,
  message?: string,
): string {
  const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, '')

  if (!sanitizedPhoneNumber) {
    throw new Error('O número de WhatsApp informado é inválido.')
  }

  const baseUrl = `https://wa.me/${sanitizedPhoneNumber}`

  if (!message?.trim()) {
    return baseUrl
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`
}