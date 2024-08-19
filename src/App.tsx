import { MainLayout } from "@/layouts";
import AppProvider from "@/providers";
import { TopHeader, GamesTabs } from "@/components/app";

function App() {
  return (
    <AppProvider>
      <MainLayout>
        <TopHeader />
        <GamesTabs />
      </MainLayout>
    </AppProvider>
  );
}

export default App;
