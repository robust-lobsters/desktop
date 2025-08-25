import type { ReactNode } from 'react'
import { OverlayProvider } from 'overlay-kit'
import { GlobalStyleProvider } from 'styles/global'
import { DevTools } from 'jotai-devtools'
import { SWRConfig } from 'swr'
import { config } from './SWRConfig'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyleProvider />
      <SWRConfig value={config}>
        <OverlayProvider>{children}</OverlayProvider>
      </SWRConfig>
      <DevTools />
    </>
  )
}
