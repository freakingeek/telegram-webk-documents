import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Telegram WebK Docs</span>,
  useNextSeoProps() {
    const { asPath } = useRouter()

    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Telegram WebK Docs'
      }
    }
  },
  project: {
    link: 'https://github.com/sttatusx/telegram-webk-documents',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/sttatusx/telegram-webk-documents',
  footer: {
    text: `© ${new Date().getFullYear()} Telegram WebK Docs`,
  },
  toc: {
    backToTop: true
  }
}

export default config