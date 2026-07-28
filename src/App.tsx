import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { CategoriesSection } from './sections/CategoriesSection'
import { HeroSection } from './sections/HeroSection'
import { LocationSection } from './sections/LocationSection'
import { OurStorySection } from './sections/OurStorySection'
import { ReviewsSection } from './sections/ReviewsSection'
import { TrustBar } from './sections/TrustBar'

function App() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Header />

      <main>
        <HeroSection />
        <TrustBar />
        <CategoriesSection />
        <OurStorySection />
        <ReviewsSection />
        <LocationSection />
      </main>

      <Footer />
    </div>
  )
}

export default App