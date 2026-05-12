const Home = () => {
  return (
  
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"></div>

        <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              Professional Corporate Management System
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Smart Tender & Project Management Platform
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Manage tenders, engineering projects, company documents, and
              downloadable files with a clean modern dashboard experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700">
                View Tenders
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold backdrop-blur-xl transition hover:bg-white/10">
                Contact Us
              </button>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div>
                <h2 className="text-4xl font-bold text-blue-400">150+</h2>
                <p className="mt-2 text-slate-400">Tenders</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">50+</h2>
                <p className="mt-2 text-slate-400">Projects</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">24/7</h2>
                <p className="mt-2 text-slate-400">Support</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">99%</h2>
                <p className="mt-2 text-slate-400">Success</p>
              </div>
            </div>
          </div>
        </div>
{/* Dashboard Preview */}
        <div className="relative">
            <div className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold">Tender Dashboard</h3>
                <span className="rounded-full bg-emerald-500/20 px-4 py-1 text-sm text-emerald-400">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Road Construction</h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Tender ID: FZ-2026-01
                      </p>
                    </div>

                    <span className="rounded-full bg-yellow-500/20 px-4 py-1 text-sm text-yellow-400">
                      Pending
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Bridge Development</h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Tender ID: FZ-2026-02
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-500/20 px-4 py-1 text-sm text-emerald-400">
                      Approved
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Electrical Supply</h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Tender ID: FZ-2026-03
                      </p>
                    </div>

                    <span className="rounded-full bg-red-500/20 px-4 py-1 text-sm text-red-400">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
  

    </section>
  );
};

export default Home;