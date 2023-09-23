import * as React from 'react'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Sidebar } from '@/components/sidebar'
import { IconGitHub, IconVercel } from '@/components/ui/icons'
import { SidebarFooter } from '@/components/sidebar-footer'
import { ThemeToggle } from '@/components/theme-toggle'

export async function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-center items-center w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://github.com/BelkacemB/kahl-bot"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          <IconGitHub />
          <span className="hidden ml-2 md:flex">شارك</span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}
