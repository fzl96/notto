import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NoteId from "./pages/app/notes/NoteId";
import AppLayout from "./components/AppLayout";
import Main from "./pages/Main";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./pages/app/ProtectedRoutes";
import Notes from "./pages/app/notes/Notes";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useState } from "react";
import type { ColorScheme } from "@mantine/core";
import NewNotes from "./pages/app/notes/NewNotes";
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    console.log(location)
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {/* <AnimatePresence> */}
          <Routes location={location} key={location.pathname}>
            <Route element={<ProtectedRoutes />}>
              <Route element={<AppLayout />}>
                <Route
                  path="/app"
                  element={<Navigate to="/app/notes" replace />}
                />
                <Route path="/app/notes" element={<Notes />} />
                <Route path="/app/notes/new" element={<NewNotes />} />
                <Route path="/app/notes/:id" element={<NoteId />} />
              </Route>
            </Route>

            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        {/* </AnimatePresence> */}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
