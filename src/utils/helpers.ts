// Utility functions
// Add reusable utility functions here

/**
 * Format phone number
 */
export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3')
}

/**
 * Scroll to element with smooth behavior
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Validate email address
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Capitalize first letter of string
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
