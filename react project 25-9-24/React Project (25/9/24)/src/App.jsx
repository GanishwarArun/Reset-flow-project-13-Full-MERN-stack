import AppHeader from "./Components/AppHeader"

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-white h-screen overflow-hidden">
        <BrowserRouter>
          <div className=" container mx-auto border-x-2 dark:border-slate-800 h-full">
            <AppHeader />
            <Routes>
              <Route path="/" element={Home />} />
              <Route path="options" element={<Options />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App