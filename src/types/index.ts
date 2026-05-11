export interface NavLink {
  label: string
  href: string
}

export interface Feature {
  title: string
  description?: string
  icon?: string
}

export interface Company {
  name: string
  category?: string
}

export interface PlacementStat {
  label: string
  value: string
}

export interface Career {
  title: string
  icon?: string
}

export interface SuccessStory {
  id: string
  name: string
  role: string
  company: string
  description: string
  image?: string
}

export interface ContactInfo {
  phone: string
  email: string
  altPhone?: string
  address?: string
}
