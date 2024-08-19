import { GamesTable } from "@/components/app";
import { MainLayout } from "@/layouts";
import AppProvider from "@/providers";

function App() {
  return (
    <AppProvider>
      <MainLayout>
        <GamesTable />
      </MainLayout>
    </AppProvider>
  );
}

export default App;
