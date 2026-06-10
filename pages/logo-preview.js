import Link from 'next/link';
import FinxtLogo, { logoThemes } from '../components/FinxtLogo';
import PageHead from '../components/PageHead';

function MockHeader({ variant, label }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <p className="border-b border-white/10 bg-[#050912] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/50">
        {label}
      </p>
      <div className="flex h-[72px] items-center justify-between bg-[#0A0F1E]/95 px-5">
        <FinxtLogo size="sm" variant={variant} />
        <div className="hidden items-center gap-2 sm:flex">
          <span className="rounded-md bg-[#141B2E] px-3 py-1.5 text-xs font-semibold text-white">Home</span>
          <span className="px-3 py-1.5 text-xs font-semibold text-white/60">About</span>
          <span className="rounded-md border border-[#C9A84C]/50 bg-[#C9A84C]/15 px-3 py-1.5 text-xs font-bold text-[#F0D078]">
            Live Studies
          </span>
        </div>
      </div>
    </div>
  );
}

export default function LogoPreview() {
  return (
    <>
      <PageHead
        title="Logo Preview"
        description="Compare FinXT logo variants."
        path="/logo-preview"
        noIndex
      />

      <div className="min-h-screen bg-[#050912] px-4 py-12 text-white md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="finxt-label mb-4">Internal preview</p>
          <h1 className="finxt-page-heading text-3xl md:text-4xl">Logo comparison</h1>
          <div className="finxt-divider" />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            Compare both variants side by side. When you decide, set{' '}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-[#F0D078]">variant=&quot;gold&quot;</code> or{' '}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-[#F0D078]">variant=&quot;color&quot;</code> on{' '}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-[#F0D078]">FinxtLogo</code> in{' '}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-[#F0D078]">Header.js</code> and{' '}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-[#F0D078]">footer.js</code>.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {Object.entries(logoThemes).map(([key, theme]) => (
              <div
                key={key}
                className="rounded-2xl border border-white/10 bg-[#0A0F1E] p-6 md:p-8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#C9A84C]">{theme.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{theme.description}</p>
                <div className="mt-8 flex min-h-[80px] items-center">
                  <FinxtLogo size="lg" variant={key} />
                </div>
                <div className="mt-6 flex gap-3">
                  <FinxtLogo size="sm" variant={key} />
                  <FinxtLogo size="md" variant={key} />
                </div>
              </div>
            ))}
          </div>

          <h2 className="finxt-section-heading mt-14 mb-6 text-xl md:text-2xl">In the header</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <MockHeader variant="color" label="Colourful variant" />
            <MockHeader variant="gold" label="Gold variant" />
          </div>

          <p className="mt-10 text-sm text-white/50">
            <Link href="/" className="text-[#C9A84C] hover:underline">
              ← Back to home
            </Link>
            {' · '}
            This page is not linked in the nav and is set to noindex.
          </p>
        </div>
      </div>
    </>
  );
}
