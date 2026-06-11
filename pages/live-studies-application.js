
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import { LIVE_STUDIES_FORM_SECRET } from '../lib/liveStudiesFormSecurity';
import { pageSeo } from '../data/seo';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

const fieldClass =
  'w-full rounded-2xl border border-[#D9E0EE] bg-white px-4 py-3 text-[15px] text-[#0A0F1E] placeholder:text-gray-500 outline-none transition focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20';

const labelClass =
  'mb-1 block text-[15px] font-semibold text-[#0A0F1E]';

const helpClass = 'text-[13px] text-gray-500 mb-2';

function TextInput({
  label,
  help,
  name,
  type = 'text',
  placeholder,
  required = false,
  width = 'full',
  min,
  max,
  maxLength,
  pattern,
  autoComplete,
}) {
  return (
    <div className={`mb-7 ${width === 'small' ? 'max-w-xs' : 'max-w-xl'}`}>
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>

      {help && <p className={helpClass}>{help}</p>}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        maxLength={maxLength}
        pattern={pattern}
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </div>
  );
}
function RadioGroup({ label, help, name, options, required = false }) {
  return (
    <div className="mb-8">
      <p className={labelClass}>{label}</p>

      {help && <p className={helpClass}>{help}</p>}

      <div className="space-y-2 max-w-xs">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 rounded-2xl border border-[#DCE3F0] bg-[#FAFBFF] px-4 py-3 text-[15px] text-[#0A0F1E] cursor-pointer transition hover:border-[#C9A84C] hover:bg-white"
          >
            <input
              type="radio"
              name={name}
              value={option}
              required={required}
              className="h-4 w-4 accent-black"
            />

            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function Checkbox({ name, value, children, required = false }) {
  return (
    <label className="mb-4 flex items-start gap-3 text-[15px] leading-6 text-[#0A0F1E]">
      <input type="checkbox" name={name} value={value} required={required} className="mt-1 h-5 w-5 accent-black" />
      <span>{children}</span>
    </label>
  );
}

export default function LiveStudiesApplicationPage() {
  const router = useRouter();
  const { country = 'leeds', lang = 'en' } = router.query;

  const [ethnicity, setEthnicity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const isSpanish = lang === 'es';
  const isPolish = lang === 'pl';
  const language =
    country === 'spain' || country === 'mexico'
      ? 'Spanish'
      : country === 'poland'
      ? 'Polish'
      : 'English';

  const studyTerms = isSpanish
  ? [
      
'Confirmo que no he sufrido recientemente una lesión en el cuello y que no padezco ninguna condición, incluida artritis o rigidez cervical, que pueda causarme molestias al girar o mover la cabeza.',

'Si normalmente utilizo gafas graduadas, las llevaré conmigo a la sesión del estudio.',

'Me siento cómodo/a participando en actividades que puedan requerir que mi rostro sea completamente visible.',

'Entiendo que los cubrimientos de cabeza por motivos religiosos o culturales, como un hijab, pueden utilizarse durante el estudio.',

'Confirmo que tengo al menos 16 años de edad.',

'Entiendo que enviar esta solicitud no garantiza mi selección o participación en el estudio.',

'Entiendo que mi elegibilidad será evaluada de acuerdo con los requisitos del estudio y que solo los candidatos que cumplan dichos requisitos podrán pasar a la siguiente fase del proceso.',

'Reconozco que este cuestionario de selección se utiliza para determinar mi idoneidad para participar en el estudio.',

'Confirmo que los datos personales proporcionados, incluidos mi nombre y edad, coinciden con la información que figura en mi documento oficial de identidad vigente.',

'Entiendo que la información inexacta o que no coincida con mi documentación puede dar lugar a la denegación de mi participación.',

'Entiendo que la asistencia está limitada a los participantes que hayan recibido una confirmación de reserva.',

'Reconozco que las plazas para el estudio son limitadas y que completar este formulario no garantiza una plaza.',

'He leído y acepto la Política de Privacidad y los Términos y Condiciones de FinXT UK.'
]
: isPolish
  ? [
     
'Potwierdzam, że nie doznałem/am ostatnio urazu szyi oraz nie cierpię na żadne schorzenia, w tym artretyzm lub sztywność karku, które mogłyby powodować dyskomfort podczas obracania lub poruszania głową.',

'Jeśli na co dzień noszę okulary korekcyjne, zabiorę je ze sobą na sesję badawczą.',

'Czuję się komfortowo, uczestnicząc w działaniach, które mogą wymagać pełnej widoczności mojej twarzy.',

'Rozumiem, że podczas badania można nosić nakrycia głowy wynikające z przekonań religijnych lub kulturowych, takie jak hidżab.',

'Potwierdzam, że mam ukończone co najmniej 16 lat.',

'Rozumiem, że przesłanie zgłoszenia nie gwarantuje mojego zakwalifikowania ani udziału w badaniu.',

'Rozumiem, że moja kwalifikacja zostanie oceniona na podstawie wymagań badania i tylko osoby spełniające kryteria będą mogły przejść do kolejnego etapu procesu.',

'Przyjmuję do wiadomości, że niniejszy kwestionariusz przesiewowy służy do oceny mojej przydatności do udziału w badaniu.',

'Potwierdzam, że podane przeze mnie dane osobowe, w tym imię, nazwisko oraz wiek, są zgodne z informacjami widniejącymi na ważnym dokumencie tożsamości wydanym przez odpowiedni organ.',

'Rozumiem, że podanie nieprawidłowych lub niezgodnych danych może skutkować odmową udziału w badaniu.',

'Rozumiem, że udział jest ograniczony wyłącznie do uczestników posiadających potwierdzoną rezerwację.',

'Przyjmuję do wiadomości, że liczba miejsc w badaniu jest ograniczona, a wypełnienie formularza nie gwarantuje miejsca.',

'Przeczytałem/am i akceptuję Politykę Prywatności oraz Regulamin FinXT UK.'
]
  : [
  'I confirm that I have not recently experienced a neck injury and do not have any condition, including arthritis or neck stiffness, that may cause discomfort when turning or moving my head.',

  'If I normally wear prescription glasses, I will bring them with me to the study session.',

  'I am comfortable participating in activities that may require my full face to be visible.',

  'I understand that religious or cultural head coverings, such as a hijab, may be worn during the study.',

  'I confirm that I am at least 16 years of age.',

  'I understand that submitting this application does not guarantee selection or participation in the study.',

  'I understand that eligibility will be assessed based on the study requirements and that only qualifying applicants may proceed to the next stage of the process.',

  'I acknowledge that this screening questionnaire is used to determine my suitability for participation in the study.',

  'I confirm that the personal details provided, including my name and age, match the information shown on my valid government-issued identification.',

  'I understand that inaccurate or mismatched information may result in my participation being declined.',

  'I understand that attendance is limited to participants who have received a confirmed booking.',

  'I acknowledge that study places are limited and that completing this form does not guarantee a place.',

  'I have read and agree to FinXT UK’s Privacy Policy and Terms & Conditions.'
];
    const healthTerms = isSpanish
  ? [
      'Confirmo que no padezco ninguna afección respiratoria aguda o crónica.',

      'Confirmo que no he experimentado síntomas similares a los de la gripe, incluyendo fiebre, tos, dificultad para respirar, dolor de garganta, secreción nasal o problemas respiratorios durante los últimos 14 días.',

      'Confirmo que ningún miembro de mi hogar ha experimentado síntomas similares a los de la gripe, incluyendo fiebre, tos, dificultad para respirar, dolor de garganta, secreción nasal o problemas respiratorios durante los últimos 14 días.',

      'Confirmo que no he realizado viajes internacionales durante los 14 días previos al estudio.',

      'Confirmo que no he estado en contacto cercano con ninguna persona diagnosticada con una enfermedad respiratoria contagiosa o que esté siendo evaluada por una posible enfermedad respiratoria contagiosa durante los últimos 14 días.'
]

  : isPolish
  ? [
      'Potwierdzam, że nie cierpię na żadne ostre ani przewlekłe schorzenia układu oddechowego.',

      'Potwierdzam, że w ciągu ostatnich 14 dni nie występowały u mnie objawy grypopodobne, takie jak gorączka, kaszel, duszność, ból gardła, katar lub trudności w oddychaniu.',

      'Potwierdzam, że żaden z członków mojego gospodarstwa domowego nie doświadczał w ciągu ostatnich 14 dni objawów grypopodobnych, takich jak gorączka, kaszel, duszność, ból gardła, katar lub trudności w oddychaniu.',

      'Potwierdzam, że nie podróżowałem/am za granicę w ciągu 14 dni poprzedzających badanie.',

      'Potwierdzam, że w ciągu ostatnich 14 dni nie miałem/am bliskiego kontaktu z osobą, u której zdiagnozowano zakaźną chorobę układu oddechowego lub która była poddawana ocenie pod kątem takiej choroby.'
]

  : [
    
      'I confirm that I do not have any acute or chronic respiratory conditions.',

      'I confirm that I have not experienced flu-like symptoms, including fever, cough, shortness of breath, sore throat, runny nose, or difficulty breathing within the past 14 days.',

      'I confirm that no members of my household have experienced flu-like symptoms, including fever, cough, shortness of breath, sore throat, runny nose, or difficulty breathing within the past 14 days.',

      'I confirm that I have not travelled internationally within the 14 days prior to the study.',

      'I confirm that I have not been in close contact with anyone who has been diagnosed with, or is being evaluated for, a contagious respiratory illness within the past 14 days.'

    ];

const gdprTerms = isSpanish
  ? [
      'Al enviar este formulario, usted acepta que FinXT UK Ltd procese su información personal con fines de selección, contratación y participación en estudios de investigación. Sus datos serán tratados de conformidad con la legislación aplicable en materia de protección de datos y con nuestra Política de Privacidad.',
    ]
  : isPolish
  ? [
      'Przesyłając ten formularz, wyrażam zgodę na przetwarzanie moich danych osobowych przez FinXT UK Ltd w celu rekrutacji uczestników do badań oraz organizacji ich udziału w projektach badawczych. Moje dane będą przetwarzane zgodnie z obowiązującymi przepisami dotyczącymi ochrony danych osobowych oraz Polityką Prywatności FinXT UK.',
    ]
  : [
      'By submitting this form, you consent to FinXT UK Ltd processing your personal information for research study recruitment and participation purposes. Your data will be handled in accordance with applicable data protection laws and our Privacy Policy.',
    ];
    const studyInfo = {
  leeds: {
    location: 'Leeds, United Kingdom',
    title: 'User study for technology applications',
    duration: '90-minute session',
    payment: ['Sibling Participants: £100 per person',],
  },
  usa: {
    location: 'New York, USA',
    title: 'User study for technology applications',
    duration: '90-minute session',
    payment:['Sibling Participants: $100 per person',],
  },
  india: {
    location: 'India',
    title: 'User study for technology applications',
    duration: '90-minute session',
    payment: ['Individual Participants: ₹2,500 per person','Sibling Participants: ₹5,000 per person',],
  },
  spain: {
    location: 'Spain',
    title: isSpanish
      ? 'Estudio de usuarios para aplicaciones tecnológicas'
      : 'User study for technology applications',
    duration: isSpanish ? 'Sesión de 90 minutos' : '90-minute session',
    payment: isSpanish
      ? [
        'Participantes individuales: €50 por persona',
        'Participantes hermanos/as: €100 por persona',
      ]
    : [
        'Individual Participants: €50 per person',
        'Sibling Participants: €100 per person',
      ],
  },
  mexico: {
    location: isSpanish ? 'Ciudad de México, MX' : 'Mexico City, MX',
    title: isSpanish
      ? 'Estudio de usuarios para aplicaciones tecnológicas'
      : 'User study for technology applications',
    duration: isSpanish ? 'Sesión de 90 minutos' : '90-minute session',
    payment: isSpanish
      ? [
        'Participantes individuales: 900 MXN pesos por persona',
        'Participantes hermanos/as: 1,200 MXN pesos por persona',
      ]
    : [
        'Individual Participants: 900 MXN pesos per person',
        'Sibling Participants: 1,200 MXN pesos per person',
      ],
  },
  poland: {
    location: isPolish ? 'Polska' : 'Poland',
    title: isPolish
      ? 'Badanie użytkowników aplikacji technologicznych'
      : 'User study for technology applications',
    duration: isPolish ? 'Sesja 90 minut' : '90-minute session',
    payment: isPolish
      ? [
        'Uczestnicy indywidualni: 200 PLN za osobę',
        'Uczestnicy rodzeństwa: 285 PLN za osobę',
      ]
    : [
        'Individual Participants: 200 Polish zloty per person',
        'Sibling Participants: 285 Polish zloty per person',
      ],
  },
};

const selectedStudy = studyInfo[country] || studyInfo.leeds;

const siblingPayment =
  country === 'leeds'
    ? '£100'
    : country === 'poland'
    ? '285 Polish zloty'
    : country === 'spain'
    ? '€100'
    : country === 'usa'
    ? '$100'
    : country === 'mexico'
    ? '1,200 pesos'
    : country === 'india'
    ? '₹5,000'
    : '£100';

    const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbx6W3tweWJiCulDR-J46UXpMh0DT4veLxiBhfinUbIMqlUbRIDpSBTsGFZ5K8PoUI9Y/exec';

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitError('');
  setIsSubmitting(true);

  const form = e.currentTarget;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  if (data.website) {
    router.push('/thank-you?source=live-studies');
    return;
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      keepalive: true,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.type === 'opaque') {
      router.push('/thank-you?source=live-studies');
      return;
    }

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    router.push('/thank-you?source=live-studies');
  } catch (error) {
    setSubmitError(
      isSpanish
        ? 'No se pudo enviar su solicitud. Compruebe su conexión e inténtelo de nuevo, o escríbanos a info@finxt.uk.'
        : isPolish
        ? 'Nie udało się wysłać zgłoszenia. Sprawdź połączenie i spróbuj ponownie lub napisz do nas na info@finxt.uk.'
        : 'We could not submit your application. Please check your connection and try again, or email info@finxt.uk.'
    );
    setIsSubmitting(false);
  }
};
  return (
    <Layout>
      <PageHead {...pageSeo.liveStudiesApplication} />
      <section className="relative overflow-hidden bg-[#050912] px-4 py-16">
        
      <div className="max-w-4xl mx-auto rounded-[32px] border border-[#C9A84C]/15 bg-white/95 backdrop-blur-sm p-7  md:p-12 shadow-sm">
          <Link
            href="/live-studies"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0A0F1E] transition hover:text-[#C9A84C]"
          >
            <span aria-hidden="true">←</span>
            {isSpanish
              ? 'Volver a Estudios en vivo'
              : isPolish
              ? 'Powrót do badań na żywo'
              : 'Back to Live Studies'}
          </Link>

          <p className="finxt-label mb-5">
            {isSpanish
              ? 'Solicitud de estudios en vivo'
              : isPolish
              ? 'Zgłoszenie do badań na żywo'
              : 'Live Studies Application'}
          </p>

          <div className="border border-[#C9A84C]/20 bg-[#FAFBFF] p-6 md:p-10 mb-7">
            <p className="finxt-card-title-dark mb-3">{selectedStudy.location}</p>
          <h1 className="finxt-subsection-heading-dark mb-6">{selectedStudy.title}</h1>

            <div className="space-y-6 text-[16px] leading-7 text-[#0A0F1E]">
              <div>
                <p><strong>{selectedStudy.duration}</strong> {isSpanish ? '(estimados) por visita' : isPolish ? '(szacowany) na wizytę' : '(estimated) per visit'}
                </p>
                <div className="space-y-1">
                  {selectedStudy.payment.map((payment) => (
                    <p key={payment}>{payment}</p>
                  ))}
                </div>
              </div>
            </div>
            <br />
            <div className="mb-6">
            {lang !== 'en' ? (
              <Link
                href={`/live-studies-application?country=${country}&lang=en`}
                className="font-semibold text-[#C9A84C] underline transition hover:text-[#E8C96A]"
              >
                🇬🇧 English version
              </Link>
            ) : country === 'spain' || country === 'mexico' ? (
              <Link
                href={`/live-studies-application?country=${country}&lang=es`}
                className="font-semibold text-[#C9A84C] underline transition hover:text-[#E8C96A]"
              >
                🇪🇸 Spanish version
              </Link>
            ) : country === 'poland' ? (
              <Link
                href={`/live-studies-application?country=${country}&lang=pl`}
                className="font-semibold text-[#C9A84C] underline transition hover:text-[#E8C96A]"
              >
                🇵🇱 Polish version
              </Link>
            ) : null}
          </div>

          </div>
          <form onSubmit={handleSubmit}
          >
            <input type="hidden" name="country" value={country} />
            <input type="hidden" name="language" value={language} />
            <input type="hidden" name="form_secret" value={LIVE_STUDIES_FORM_SECRET} />
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>


            <h2 className="finxt-section-heading-dark mb-4">{isSpanish
              ? 'Cuéntanos acerca de ti.'
              : isPolish
              ? 'Opowiedz nam o sobie.'
              : 'Tell us about yourself'}</h2>
            <p className="text-[17px] mb-7 text-[#0A0F1E]">
            {isSpanish
              ? 'Este es un estudio inclusivo. Animamos a participar a personas de todos los géneros y orígenes. Debe tener más de 16 años para participar.'
              : isPolish
              ? 'To jest badanie integracyjne. Zachęcamy do udziału osoby wszystkich płci i pochodzeń. Aby wziąć udział, musisz mieć ukończone 16 lat.'
              : 'This is an inclusive study. People of all genders and backgrounds are encouraged to participate. You must be 16+ to participate.'}
          </p>

            <TextInput
            label={
              isSpanish
                ? 'Tu nombre'
                : isPolish
                ? 'Twoje imię'
                : 'Your first name'
            }
            help={
              isSpanish
                ? 'Ingresa tu nombre tal como aparece en tu identificación'
                : isPolish
                ? 'Wpisz swoje imię tak, jak widnieje na dokumencie tożsamości'
                : 'Enter your first name as it appears on your ID'
            }
            name="first_name"
            maxLength={100}
            placeholder={
              isSpanish
                ? 'Ingresa tu nombre'
                : isPolish
                ? 'Wpisz swoje imię'
                : 'Enter your first name'
            }
            required
          />
            <TextInput
              label={
                isSpanish
                  ? 'Tu apellido'
                  : isPolish
                  ? 'Twoje nazwisko'
                  : 'Your last name'
              }
              help={
                isSpanish
                  ? 'Ingresa tu apellido tal como aparece en tu identificación'
                  : isPolish
                  ? 'Wpisz swoje nazwisko tak, jak widnieje na dokumencie tożsamości'
                  : 'Enter your last name as it appears on your ID'
              }
              name="last_name"
              maxLength={100}
              placeholder={
                isSpanish
                  ? 'Ingresa tu apellido'
                  : isPolish
                  ? 'Wpisz swoje nazwisko'
                  : 'Enter your last name'
              }
              required
            />
            <TextInput
              label={
                isSpanish
                  ? 'Tu dirección de correo electrónico'
                  : isPolish
                  ? 'Twój adres e-mail'
                  : 'Your email address'
              }
              name="email"
              type="email"
              maxLength={254}
              placeholder={
                isSpanish
                  ? 'Ingresa tu correo electrónico'
                  : isPolish
                  ? 'Wpisz swój adres e-mail'
                  : 'Enter your email'
              }
              autoComplete="email"
              required
            />

              <TextInput
                label={
                  isSpanish
                    ? 'Tu número de teléfono'
                    : isPolish
                    ? 'Twój numer telefonu'
                    : 'Your phone number'
                }
                help={
                  isSpanish
                    ? 'Ingresa tu número móvil o fijo incluyendo el código de país'
                    : isPolish
                    ? 'Wpisz numer telefonu komórkowego lub domowego wraz z kodem kraju'
                    : 'Enter your mobile or home number including country code'
                }
                name="phone"
                type="tel"
                maxLength={30}
                placeholder={
                  isSpanish
                    ? 'ej. +34 612 345 678'
                    : isPolish
                    ? 'np. +48 123 456 789'
                    : 'e.g. +44 7123 456789'
                }
                autoComplete="tel"
                required
              />


            <RadioGroup
              label={
                isSpanish
                  ? '¿Cuál es tu género?'
                  : isPolish
                  ? 'Jaka jest Twoja płeć?'
                  : 'What is your gender?'
              }
              help={
                isSpanish
                  ? 'Por favor selecciona el género con el que te identificas'
                  : isPolish
                  ? 'Wybierz płeć, z którą się identyfikujesz'
                  : 'Please select the gender you identify with'
              }
              name="gender"
              options={
                isSpanish
                  ? [
                      'Femenino',
                      'Masculino',
                      'Prefiero no decirlo',
                    ]
                  : isPolish
                  ? [
                      'Kobieta',
                      'Mężczyzna',
                      'Wolę nie mówić',
                    ]
                  : [
                      'Female',
                      'Male',
                      'Prefer not to say',
                    ]
              }
              required
            />

          <div className="mb-7 max-w-xs">
            <label className={labelClass} htmlFor="ethnicity">
              {isSpanish
                ? 'Antecedentes étnicos'
                : isPolish
                ? 'Pochodzenie etniczne'
                : 'Ethnic background'}
            </label>

            <p className={helpClass}>
              {isSpanish
                ? '¿Con qué antecedentes étnicos te identificas? Esta NO es tu nacionalidad. Por favor selecciona la herencia de tu familia.'
                : isPolish
                ? 'Z jakim pochodzeniem etnicznym się identyfikujesz? To NIE jest Twoja narodowość. Wybierz pochodzenie swojej rodziny.'
                : "What ethnic background do you identify as? This is NOT your nationality. Please select your family's heritage."}
            </p>

            <select
              id="ethnicity"
              name="ethnicity"
              required
              className={fieldClass}
              value={ethnicity}
              onChange={(e) => setEthnicity(e.target.value)}
            >
              <option value="" disabled>
                {isSpanish
                  ? 'Selecciona tu origen étnico...'
                  : isPolish
                  ? 'Wybierz swoje pochodzenie...'
                  : 'Select your ethnic background...'}
              </option>

              <option>
                {isSpanish
                  ? 'Asia Oriental'
                  : isPolish
                  ? 'Wschodnioazjatyckie'
                  : 'East Asian'}
              </option>

              <option>
                {isSpanish
                  ? 'Africano / Afroamericano'
                  : isPolish
                  ? 'Afrykańskie / Afroamerykańskie'
                  : 'African / African American'}
              </option>

              <option>
                {isSpanish
                  ? 'Europa del Este'
                  : isPolish
                  ? 'Wschodnioeuropejskie'
                  : 'Eastern European'}
              </option>

              <option>
                {isSpanish
                  ? 'Latino / Hispano'
                  : isPolish
                  ? 'Latynoskie / Hiszpańskie'
                  : 'Latin/Hispanic'}
              </option>

              <option>
                {isSpanish
                  ? 'Oriente Medio'
                  : isPolish
                  ? 'Bliskowschodnie'
                  : 'Middle Eastern'}
              </option>

              <option>
                {isSpanish
                  ? 'Europa del Norte (Blanco/Caucásico)'
                  : isPolish
                  ? 'Północnoeuropejskie (Białe/Kaukaskie)'
                  : 'Northern European (White/Caucasian)'}
              </option>

              <option>
                {isSpanish
                  ? 'Asia del Sur'
                  : isPolish
                  ? 'Południowoazjatyckie'
                  : 'South Asian'}
              </option>

              <option>
                {isSpanish
                  ? 'Sudeste Asiático'
                  : isPolish
                  ? 'Południowo-wschodnioazjatyckie'
                  : 'South East Asian'}
              </option>

              <option>
                {isSpanish
                  ? 'Europa del Sur'
                  : isPolish
                  ? 'Południowoeuropejskie'
                  : 'Southern European'}
              </option>

              <option>
                {isSpanish
                  ? 'Otro'
                  : isPolish
                  ? 'Inne'
                  : 'Other'}
              </option>
            </select>

            {(ethnicity === 'Other' ||
              ethnicity === 'Otro' ||
              ethnicity === 'Inne') && (
              <input
                type="text"
                name="ethnicity_other"
                placeholder={
                  isSpanish
                    ? 'Por favor especifica tu etnia'
                    : isPolish
                    ? 'Proszę określić swoje pochodzenie'
                    : 'Please specify your ethnic background'
                }
                className={`${fieldClass} mt-4`}
                maxLength={100}
                required
              />
            )}
          </div>

          <div className="mb-7">
            <p className={labelClass}>
              {isSpanish
                ? '¿Cómo clasificarías tu tono de piel?'
                : isPolish
                ? 'Jak sklasyfikował(a)byś swój odcień skóry?'
                : 'What would you classify your skin tone as?'}
            </p>

            <p className={helpClass}>
              {isSpanish
                ? 'Por favor selecciona de la escala Fitzpatrick a continuación'
                : isPolish
                ? 'Wybierz z poniższej skali Fitzpatricka'
                : 'Please select from the Fitzpatrick scale below'}
            </p>

            <div className="mb-6 flex justify-center">
              <img
                src="/images/fitzpatrick-scale-description.jpg"
                alt="Fitzpatrick Scale"
                className="w-full max-w-md rounded-lg object-contain md:max-w-lg"
              />
            </div>

            <div className="max-w-xs space-y-2">
              {['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 6'].map((type) => (
                <label
                  key={type}
                  className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#DCE3F0] bg-[#FAFBFF] px-4 py-3 text-[15px] text-[#0A0F1E] transition hover:border-[#C9A84C] hover:bg-white"
                >
                  <input
                    type="radio"
                    name="skin_tone"
                    value={type}
                    required
                    className="h-4 w-4 accent-black"
                  />

                  <span>
                    {isSpanish
                      ? type.replace('Type', 'Tipo')
                      : isPolish
                      ? type.replace('Type', 'Typ')
                      : type}
                  </span>
                </label>
              ))}
            </div>
          </div>

            <TextInput
              label={
                isSpanish
                  ? '¿Cuál es tu año de nacimiento?'
                  : isPolish
                  ? 'Jaki jest Twój rok urodzenia?'
                  : 'What is your birth year?'
              }
              name="birth_year"
              type="number"
              placeholder={
                isSpanish
                  ? 'ej. 1980'
                  : isPolish
                  ? 'np. 1980'
                  : 'e.g. 1980'
              }
              width="small"
              min="1900"
              max="2010"
              required
            />
            <RadioGroup
            label={
              isSpanish
                ? 'Tu edad'
                : isPolish
                ? 'Twój wiek'
                : 'Your age'
            }
            help={
              isSpanish
                ? '¿En qué rango de edad te encuentras?'
                : isPolish
                ? 'Do którego przedziału wiekowego należysz?'
                : 'Which age range are you in?'
            }
            name="age_range"
            options={['16 - 34', '35 - 49', '50 - 64', '65+']}
            required
          />

          <RadioGroup
            label={
              isSpanish
                ? '¿Tienes un hermano o hermana del mismo género que pueda asistir al estudio contigo?'
                : isPolish
                ? 'Czy masz rodzeństwo tej samej płci, które mogłoby uczestniczyć w badaniu razem z Tobą?'
                : 'Do you have a sibling of the same gender that can attend the study with you?'
            }
            help={
              isSpanish
                ? `Si eres hombre y tienes un hermano, o si eres mujer y tienes una hermana, háznoslo saber. Cada hermano/a recibirá ${siblingPayment} si completa el estudio.`
                : isPolish
                ? `Jeśli jesteś mężczyzną i masz brata lub jesteś kobietą i masz siostrę, daj nam znać. Każde rodzeństwo otrzyma ${siblingPayment}, jeśli ukończy badanie.`
                : `If you are male and have a brother, or if you are female and have a sister, let us know. Each sibling will receive ${siblingPayment} if they complete the user study.`
            }
            name="same_gender_sibling"
            options={
              isSpanish
                ? ['Sí', 'No']
                : isPolish
                ? ['Tak', 'Nie']
                : ['Yes', 'No']
            }
            required
          />

           

          <RadioGroup
            label={
              isSpanish
                ? '¿Tienes un familiar con una diferencia de edad menor a 20 años que también pueda participar en este estudio?'
                : isPolish
                ? 'Czy masz członka rodziny w przedziale 20 lat różnicy wieku, który również mógłby uczestniczyć w tym badaniu?'
                : 'Do you have a family member within 20 years of your age who could also participate in this study?'
            }
            help={
              isSpanish
                ? 'Si participan, recibirán la misma cantidad de pago que un hermano/a del mismo género en este estudio.'
                : isPolish
                ? 'Jeśli wezmą udział, otrzymają taką samą kwotę wynagrodzenia jak rodzeństwo tej samej płci w tym badaniu.'
                : 'If they join, they will receive the same payment amount as a same-gender sibling would in this study.'
            }
            name="family_member_20_years"
            options={
              isSpanish
                ? ['Sí', 'No']
                : isPolish
                ? ['Tak', 'Nie']
                : ['Yes', 'No']
            }
            required
          />
            <RadioGroup
              label={
                isSpanish
                  ? '¿Usas maquillaje diariamente?'
                  : isPolish
                  ? 'Czy na co dzień nosisz makijaż?'
                  : 'Do you wear makeup day-to-day?'
              }
              name="makeup_day_to_day"
              options={
                isSpanish
                  ? [
                      'No — No uso maquillaje',
                      'Sí — Maquillaje ligero o diario',
                      'Sí — Maquillaje intenso o de salida',
                    ]
                  : isPolish
                  ? [
                      'Nie — Nie noszę makijażu',
                      'Tak — Lekki lub codzienny makijaż',
                      'Tak — Mocny lub wieczorowy makijaż',
                    ]
                  : [
                      "No — I don't wear makeup",
                      'Yes — Light or everyday makeup',
                      'Yes — Heavy or going-out makeup',
                    ]
              }
              required
            />

              <RadioGroup
              label={
                isSpanish
                  ? '¿Usas gafas graduadas diariamente?'
                  : isPolish
                  ? 'Czy na co dzień nosisz okulary korekcyjne?'
                  : 'Do you wear prescription glasses day-to-day?'
              }
              name="wear_glasses"
              options={
                isSpanish
                  ? ['Sí', 'No']
                  : isPolish
                  ? ['Tak', 'Nie']
                  : ['Yes', 'No']
              }
              required
            />

            

          <TextInput
            label={
              isSpanish
                ? 'Tu empleador'
                : isPolish
                ? 'Twój pracodawca'
                : 'Your Employer'
            }
            name="employer"
            maxLength={150}
            placeholder={
              isSpanish
                ? 'Por favor ingresa el nombre de tu empresa'
                : isPolish
                ? 'Wpisz nazwę swojego pracodawcy'
                : 'Please enter the name of who you work for'
            }
          />

          <TextInput
            label={
              isSpanish
                ? 'Tu ocupación'
                : isPolish
                ? 'Twój zawód'
                : 'Your Occupation'
            }
            name="occupation"
            maxLength={150}
            placeholder={
              isSpanish
                ? 'Por favor ingresa tu ocupación'
                : isPolish
                ? 'Wpisz swój zawód'
                : 'Please enter your occupation'
            }
          />

          <TextInput
            label={
              isSpanish
                ? '¿Te dieron un código de referencia? Si es así, ingrésalo abajo'
                : isPolish
                ? 'Czy otrzymałeś kod polecający? Jeśli tak, wpisz go poniżej'
                : 'Were you given a referral code to enter? If so, please enter below'
            }
            name="referral_code"
            width="small"
            maxLength={50}
            placeholder=""
          />

        <RadioGroup
          label={
            isSpanish
              ? '¿Has participado anteriormente en un estudio con FinXT?'
              : isPolish
              ? 'Czy brałeś/aś wcześniej udział w badaniu z FinXT?'
              : 'Have you participated in a study with FinXT in the past?'
          }
          name="participated_before"
          options={
            isSpanish
              ? ['Sí', 'No']
              : isPolish
              ? ['Tak', 'Nie']
              : ['Yes', 'No']
          }
          required
        />

        <RadioGroup
          label={
            isSpanish
              ? '¿Cómo prefieres que te contactemos? (Selecciona una opción)'
              : isPolish
              ? 'Jak wolisz, abyśmy się z Tobą kontaktowali? (Wybierz jedną opcję)'
              : 'How do you prefer to be contacted? (Select one)'
          }
          name="preferred_contact"
          options={
            isSpanish
              ? ['Llamada', 'Correo electrónico', 'WhatsApp', 'SMS']
              : isPolish
              ? ['Telefon', 'E-mail', 'WhatsApp', 'SMS']
              : ['Call', 'Email', 'WhatsApp', 'SMS']
          }
          required
        />

        <div className="mb-7">
          <p className={labelClass}>
            {isSpanish
              ? 'Participar en futuros estudios'
              : isPolish
              ? 'Zgoda na przyszłe badania'
              : 'Opt into future studies'}
          </p>

          <p className={helpClass}>
            {isSpanish
              ? 'Si deseas que te contactemos sobre futuros estudios en tu área, marca la casilla abajo.'
              : isPolish
              ? 'Jeśli chcesz, abyśmy kontaktowali się z Tobą w sprawie przyszłych badań w Twojej okolicy, zaznacz poniższe pole.'
              : 'If you would like us to contact you about future studies in your area, tick the box below.'}
          </p>
          <input
            type="hidden"
            name="future_studies_opt_in"
            value="No"
          />

          <Checkbox name="future_studies_opt_in" value="Yes">
            {isSpanish
              ? 'Sí — Me gustaría ser contactado sobre futuros estudios'
              : isPolish
              ? 'Tak — Chciał(a)bym otrzymywać informacje o przyszłych badaniach'
              : 'Yes — I would like to be contacted about participating in future studies'}
          </Checkbox>
        </div>

            <div className="mb-7">
          <p className="mb-4 text-2xl font-bold text-[#0A0F1E]">
            {isSpanish
              ? 'Términos del estudio — por favor lea cuidadosamente:'
              : isPolish
              ? 'Warunki badania — prosimy o uważne przeczytanie:'
              : 'Study Terms — please read carefully:'}
          </p>
                <ul className="mb-6 list-disc pl-8 text-[16px] leading-7 text-[#0A0F1E]">
                  {studyTerms.map((term) => (
                    <li key={term}>{term}</li>
                  ))}
                </ul>

              <p className="mb-4 text-2xl font-bold text-[#0A0F1E]">
                {isSpanish
                  ? 'Declaración de Salud y Seguridad'
                  : isPolish
                  ? 'Deklaracja zdrowia i bezpieczeństwa'
                  : 'Health & Safety Declaration'}
              </p>

              <ul className="mb-6 list-disc pl-8 text-[16px] leading-7 text-[#0A0F1E]">
                {healthTerms.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ul>

              <p className="mb-4 text-2xl font-bold text-[#0A0F1E]">
                {isSpanish
                  ? 'Acuerdo de Datos y GDPR'
                  : isPolish
                  ? 'Umowa dotycząca danych i RODO'
                  : 'Data & GDPR Agreement'}
              </p>

              <ul className="mb-6 list-disc pl-8 text-[16px] leading-7 text-[#0A0F1E]">
                {gdprTerms.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ul>

          <Checkbox name="terms_confirmation" value="Confirmed" required>
            {isSpanish ? (
              <>
                Confirmo que he leído y acepto la{' '}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#C9A84C] underline"
                >
                  Política de Privacidad
                </a>{' '}
                y los{' '}
                <a
                  href="/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#C9A84C] underline"
                >
                  Términos y Condiciones
                </a>
                .
              </>
            ) : isPolish ? (
              <>
                Potwierdzam, że zapoznałem/am się z{' '}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#C9A84C] underline"
                >
                  Polityką Prywatności
                </a>{' '}
                oraz{' '}
                <a
                  href="/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#C9A84C] underline"
                >
                  Regulaminem
                </a>
                .
              </>
            ) : (
              <>
                I confirm that I have read and agree to the{' '}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#C9A84C] underline"
                >
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href="/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#C9A84C] underline"
                >
                  Terms & Conditions
                </a>
                .
              </>
            )}
          </Checkbox>
            </div>
            <p className="mb-5 text-sm leading-6 text-gray-600">
              {isSpanish
                ? ( 
                  <>
                  Su información personal se utilizará únicamente para fines de reclutamiento y evaluación de elegibilidad para estudios de investigación. Puede solicitar la eliminación de sus datos o retirar su consentimiento en cualquier momento poniéndose en contacto con {''} 
                  <a href="mailto:info@finxt.uk"
                className="font-medium text-[#C9A84C] hover:underline">
                  info@finxt.uk
                </a>.
                </>
                )
                : isPolish
                ? ( 
                  <>
                  Twoje dane osobowe będą wykorzystywane wyłącznie do celów rekrutacji uczestników do badań oraz oceny kwalifikacji do udziału w badaniach. W każdej chwili możesz zażądać usunięcia swoich danych lub wycofać swoją zgodę, kontaktując się z nami pod adresem {''} 
                  <a href="mailto:info@finxt.uk"
                className="font-medium text-[#C9A84C] hover:underline">
                  info@finxt.uk
                </a>.
                </>
                )
                : (
                  <> Your personal information will only be used for research study recruitment and eligibility assessment purposes. You may request deletion of your data or withdraw your consent at any time by contacting {''} 
                <a href="mailto:info@finxt.uk"
                className="font-medium text-[#C9A84C] hover:underline">
                  info@finxt.uk
                </a>.
                </>
                )}
            </p>

            {submitError && (
              <p
                role="alert"
                className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800"
              >
                {submitError}
              </p>
            )}

            <button
              type="submit" disabled={isSubmitting}
              className="rounded-2xl bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#050912] shadow-[0_0_35px_rgba(201,168,76,0.25)] transition hover:-translate-y-1 hover:bg-[#E8C96A] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting
                ? isSpanish
                  ? 'Enviando...'
                  : isPolish
                  ? 'Wysyłanie...'
                  : 'Submitting...'
                : isSpanish
                ? 'Enviar'
                : isPolish
                ? 'Wyślij'
                : 'Submit'}
            </button>
            
          </form>
        </div>
      </section>
    </Layout>
  );
}
