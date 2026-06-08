import ScrollReveal from '@/components/effects/ScrollReveal';
import { profile } from '@/data/profile';

export default function Contact() {
  return (
    <ScrollReveal as="section" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-16 bg-surface-container-lowest border-t border-black/5" id="contact">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="col-span-12 lg:col-span-7">
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 sm:mb-6 block stagger-item stagger-delay-1">Let&apos;s Connect</span>
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-on-surface leading-[0.85] tracking-tighter mb-8 sm:mb-12 stagger-item stagger-delay-2">
              Ready to<br /><span className="text-on-surface-variant/20">Collaborate?</span>
            </h2>
            <div className="flex flex-col gap-8 stagger-item stagger-delay-3">
              <a className="group flex items-center gap-4 sm:gap-6 hoverable" href={`mailto:${profile.email}`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center transition-transform group-hover:rotate-6 flex-shrink-0">
                  <span className="material-symbols-outlined text-surface-container-lowest text-2xl sm:text-3xl">mail</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-on-surface break-all sm:break-normal">{profile.email}</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="space-y-4">
              <p className="text-body-lg text-on-surface-variant mb-8 sm:mb-12 leading-relaxed stagger-item stagger-delay-1">Currently open to new opportunities and interesting projects. Let&apos;s build something exceptional together.</p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 stagger-item stagger-delay-2">
                <a className="skill-chip p-4 sm:p-6 rounded-2xl flex flex-col gap-3 sm:gap-4 hoverable group stagger-item stagger-delay-1" href="https://www.instagram.com/ericyedijas">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/instagram/111111" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-bold text-on-surface" >Instagram</span>
                </a>
                <a className="skill-chip p-4 sm:p-6 rounded-2xl flex flex-col gap-3 sm:gap-4 hoverable group stagger-item stagger-delay-2" href="https://www.linkedin.com/in/eric-yedija-sinaga-9627a537b/">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23111111'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/%3E%3C/svg%3E" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-bold text-on-surface">LinkedIn</span>
                </a>
                <a className="skill-chip p-4 sm:p-6 rounded-2xl flex flex-col gap-3 sm:gap-4 hoverable group stagger-item stagger-delay-3" href="https://github.com/Rictro1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.simpleicons.org/github/111111" alt="GitHub" className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-bold text-on-surface">GitHub</span>
                </a>
                <a className="skill-chip p-4 sm:p-6 rounded-2xl flex flex-col gap-3 sm:gap-4 hoverable group stagger-item stagger-delay-4" href="/cv/cv-eric.pdf">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23111111'%3E%3Cpath d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6zm2-7h8v2H8v-2zm0 4h5v2H8v-2z'/%3E%3C/svg%3E" alt="Resume" className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-bold text-on-surface">Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
