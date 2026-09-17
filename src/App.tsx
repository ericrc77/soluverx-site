import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import Privacy from './pages/Privacy/Privacy'
import RouteFallback from './components/RouteFallback/RouteFallback'
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat'

const DevelopmentSoftware = lazy(
  () => import('./pages/DevelopmentSoftware/DevelopmentSoftware'),
)
const Dashboards = lazy(() => import('./pages/Dashboards/Dashboards'))
const ProcessAutomation = lazy(
  () => import('./pages/ProcessAutomation/ProcessAutomation'),
)
const SystemsIntegration = lazy(
  () => import('./pages/SystemsIntegration/SystemsIntegration'),
)

function App() {
  return (
    <BrowserRouter>
      <WhatsAppFloat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route
          path="/desenvolvimento-de-software"
          element={
            <Suspense fallback={<RouteFallback />}>
              <DevelopmentSoftware />
            </Suspense>
          }
        />
        <Route
          path="/dashboards"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Dashboards />
            </Suspense>
          }
        />
        <Route
          path="/automacao-de-processos"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ProcessAutomation />
            </Suspense>
          }
        />
        <Route
          path="/integracao-de-sistemas"
          element={
            <Suspense fallback={<RouteFallback />}>
              <SystemsIntegration />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
