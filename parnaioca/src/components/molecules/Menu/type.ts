import { ReactNode } from "react"

export interface MenuItem {
  path: string
  icon: string | ReactNode
  label: string
}