import type { ColorScheme } from "@mantine/core";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import NewNotes from "./pages/app/notes/NewNotes";
import NoteId from "./pages/app/notes/NoteId";
import Notes from "./pages/app/notes/Notes";
import ProtectedRoutes from "./pages/app/ProtectedRoutes";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const matches = useMediaQuery("(max-width: 768px)", false);

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

              {!matches && (
                <>
                  <Route path="/app/notes/new" element={<NewNotes />} />
                  <Route path="/app/notes/:id" element={<NoteId />} />
                </>
              )}
              
            </Route>

            {matches && (
              <>
                <Route path="/app/notes/new" element={<NewNotes />} />
                <Route path="/app/notes/:id" element={<NoteId />} />
              </>
            )}
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
