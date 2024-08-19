import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { ThemeProvider } from './hooks/ui';
import { Home } from './pages/Home';

function App() {
    return (
        <ThemeProvider>
            <div className="app-container h-screen">
                <Header />

                <main className="p-8 min-h-96">
                    <Home />
                </main>

                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
