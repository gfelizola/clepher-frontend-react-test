import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { ThemeProvider } from './hooks/ui';

import { Home } from './pages/home/Home';
import { StockProvider } from './hooks/stock';

const queryClient = new QueryClient();

function App() {
    return (
        <ThemeProvider>
            <StockProvider>
                <QueryClientProvider client={queryClient}>
                    <div className="app-container h-screen">
                        <Header />

                        <main className="p-4 md:p-8 min-h-96 w-full box-border">
                            <Home />
                        </main>

                        <Footer />
                    </div>
                </QueryClientProvider>
            </StockProvider>
        </ThemeProvider>
    );
}

export default App;
