export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Shiv Shankar Yadav
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            CS Engineer, Entrepreneur & Creative Technologist
          </p>
          <a
            href="/works"
            className="inline-block px-8 py-3 bg-foreground text-background rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Work
          </a>
        </div>
      </section>
    </div>
  );
}
