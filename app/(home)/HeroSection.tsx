'use client';

import { useActionState } from 'react';
import { useEffect, useState } from 'react';
import { submitForm, type FormState } from '@/app/actions';
import { useModal } from '@/components/shared/ModalContext';

const initialState: FormState = { success: false, message: '' };

export default function HeroSection() {
  const [state, formAction, isPending] = useActionState(submitForm, initialState);
  const [scrollY, setScrollY] = useState(0);
  const { open } = useModal();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=modern%20industrial%20CNC%20machining%20center%20in%20action%20with%20metal%20chips%20flying%20precision%20manufacturing%20environment%20with%20dramatic%20lighting%20and%20blue%20metallic%20tones%20high%20tech%20factory%20atmosphere%20showing%20advanced%20automation%20and%20engineering%20excellence%20dark%20industrial%20background&width=1920&height=1080&seq=hero001&orientation=landscape"
          alt="ЧПУ обработка металла"
          className="w-full h-[128%] object-cover"
          style={{ transform: `translateY(${scrollY * 0.35}px)`, top: '-6%', position: 'relative' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/72 to-neutral-950/20" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950/82 via-neutral-950/48 to-transparent lg:h-48" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 pt-36 pb-16 lg:pt-40 lg:pb-20">
        <div className="grid items-center gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-3">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2">
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              <span className="text-brand text-sm font-medium">Принимаем заказы</span>
            </div>

            <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-[2.75rem] lg:text-[3.15rem]">
              Металлообработка
              <br />
              и производство металлоизделий
              <br />
              <span className="text-brand">на станках с ЧПУ</span>
            </h1>

            <p className="mb-7 max-w-lg text-base text-gray-300 lg:text-lg">
              Токарная и фрезерная обработка металлов любой сложности. Работаем по чертежам,
              3D&#8209;моделям и образцам. Доставка по всей России.
            </p>

            <div className="mb-8 flex flex-wrap gap-6 lg:gap-8">
              <div>
                <div className="text-2xl font-bold text-brand lg:text-[1.75rem]">±0.01 мм</div>
                <div className="text-sm text-gray-400 mt-1">точность обработки</div>
              </div>
              <div className="w-px bg-white/20 hidden sm:block" />
              <div>
                <div className="text-2xl font-bold text-brand lg:text-[1.75rem]">от 2 часов</div>
                <div className="text-sm text-gray-400 mt-1">расчёт стоимости</div>
              </div>
              <div className="w-px bg-white/20 hidden sm:block" />
              <div>
                <div className="text-2xl font-bold text-brand lg:text-[1.75rem]">6 станков</div>
                <div className="text-sm text-gray-400 mt-1">собственный парк</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={open}
                className="rounded-lg bg-brand px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Рассчитать стоимость
              </button>
              <a
                href="tel:+74957890054"
                className="flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                <i className="ri-phone-line" />
                +7 (495) 789-00-54
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md lg:col-span-2 lg:mt-[4rem] lg:self-start lg:p-7">
            <h2 className="mb-2 text-2xl font-bold text-white">Быстрый расчёт</h2>
            <p className="mb-5 text-sm text-gray-400">
              Отправьте заявку и получите расчёт стоимости за 2 часа
            </p>

            <form action={formAction} className="space-y-4">
              <input type="hidden" name="formId" value="hero-quick" />

              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-sm"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-sm"
                />
              </div>

              <div>
                <input
                  type="file"
                  name="file"
                  accept=".pdf,.dwg,.dxf,.step,.stp"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all text-sm cursor-pointer file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:bg-brand/20 file:text-brand file:text-sm file:font-medium"
                />
                <p className="text-xs text-gray-500 mt-1">PDF, DWG, DXF, STEP до 10 МБ</p>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-brand text-white px-6 py-4 rounded-lg text-base font-semibold hover:bg-brand-dark transition-colors disabled:opacity-50"
              >
                {isPending ? 'Отправка...' : 'Получить расчёт'}
              </button>

              {state.success && state.message && (
                <div className="px-4 py-3 rounded-lg text-sm bg-green-900/40 border border-green-600/40 text-green-300">
                  {state.message}
                </div>
              )}

              <p className="text-xs text-center text-gray-500">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
