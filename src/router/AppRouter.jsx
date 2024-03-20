import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal"

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login */}
      <Route path="/auth/*" element={<AuthRoutes /> } />

      {/* JounarlApp */}
      <Route path='/*' element={<JournalRoutes />} />
    </Routes>
  )
}
