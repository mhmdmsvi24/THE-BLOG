import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="absolute bottom-0 p-4">
        <ModeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App
