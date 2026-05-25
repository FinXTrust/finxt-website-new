
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

const fieldClass =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#0A0F1E] placeholder:text-gray-500 outline-none transition focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20';

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
            className="flex items-center gap-3  border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#0A0F1E] cursor-pointer hover:border-[#C9A84C] rounded-md transition"
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
    <label className="flex items-start gap-4 text-[16px] leading-7 text-[#0A0F1E] mb-4">
      <input type="checkbox" name={name} value={value} required={required} className="mt-1 h-5 w-5 accent-black" />
      <span>{children}</span>
    </label>
  );
}

export default function LiveStudiesApplicationPage() {
  const router = useRouter();
  const { country, lang = 'en' } = router.query;

  const [ethnicity, setEthnicity] = useState('');

  const isSpanish = lang === 'es';
  const isPolish = lang === 'pl';

  const studyTerms = isSpanish
  ? [
      'Confirmo que NO he tenido recientemente una lesión en el cuello...',
      'Si uso gafas graduadas, las llevaré al estudio.',
      'Estoy dispuesto(a) a mostrar todo mi rostro.',
      'Entiendo que si uso un accesorio especial para la cabeza, por ejemplo un hijab, puedo usarlo durante el estudio.',
      'Confirmo que no soy menor de 16 años.',
      'Entiendo que completar este formulario no garantiza elegibilidad.',
      'Confirmo que mi nombre y edad coinciden exactamente con mi identificación oficial.',
      'Entiendo que solo los participantes reservados serán admitidos.',
      'He leído y acepto la Política de Privacidad y los Términos y Condiciones de FinXT UK.',
    ]
  : isPolish
  ? [
      'Potwierdzam, że NIE miałem/am ostatnio urazu szyi...',
      'Jeśli noszę okulary korekcyjne, zabiorę je na badanie.',
      'Wyrażam zgodę na pokazanie całej twarzy.',
      'Rozumiem, że mogę nosić specjalne nakrycie głowy, np. hidżab.',
      'Potwierdzam, że mam ukończone 16 lat.',
      'Rozumiem, że wypełnienie formularza nie gwarantuje kwalifikacji.',
      'Potwierdzam zgodność danych z dokumentem tożsamości.',
      'Rozumiem, że tylko zapisani uczestnicy zostaną wpuszczeni.',
      'Przeczytałem/am i akceptuję Politykę Prywatności oraz Regulamin FinXT UK.',
    ]
  : [
      'I confirm that I have NOT recently had neck injury...',
      'If I wear prescription glasses, I will bring them to the user testing.',
      'I am willing to show my entire face.',
      'I understand that if I have special headwear, e.g. a hijab, I may wear it during the study.',
      'I confirm I am not under the age of 16.',
      'I understand that completing this form does not guarantee eligibility.',
      'I confirm that my name and age exactly match those on my valid photo ID.',
      'I understand that only booked participants will be admitted.',
      'I have read and agree to FinXT UK’s Privacy Policy and Terms & Conditions.',
    ];
    const healthTerms = isSpanish
  ? [
      'Confirmo que no tengo ninguna condición respiratoria aguda o crónica.',
      'No tengo síntomas gripales incluyendo fiebre, tos, dificultad para respirar, dolor de garganta o secreción nasal.',
      'No he tenido contacto cercano con alguien positivo por COVID-19 en los últimos 14 días.',
    ]
  : isPolish
  ? [
      'Potwierdzam, że nie mam żadnych ostrych ani przewlekłych chorób układu oddechowego.',
      'Nie mam objawów grypopodobnych, takich jak gorączka, kaszel, duszność, ból gardła lub katar.',
      'Nie miałem/am bliskiego kontaktu z osobą zakażoną COVID-19 w ciągu ostatnich 14 dni.',
    ]
  : [
      'I confirm that I do not have any acute or chronic respiratory conditions.',
      'I do not have flu-like symptoms including fever, cough, shortness of breath, sore throat, or runny nose.',
      'I have not had close contact with anyone confirmed positive for COVID-19 in the past 14 days.',
    ];

const gdprTerms = isSpanish
  ? [
      'Al enviar este formulario, reconoces que tus datos personales serán procesados por FinXT UK Ltd con fines de reclutamiento para estudios de investigación.',
    ]
  : isPolish
  ? [
      'Przesyłając ten formularz, potwierdzasz, że Twoje dane osobowe będą przetwarzane przez FinXT UK Ltd w celu rekrutacji do badań.',
    ]
  : [
      'By submitting this form, you acknowledge that your personal data will be processed by FinXT UK Ltd for the purpose of research study recruitment.',
    ];
    const studyInfo = {
  leeds: {
    location: 'Leeds, United Kingdom',
    title: 'User study for technology applications',
    duration: 'Duration 90 minutes',
    payment: ['Sibling Participants: £100 per person',],
  },
  usa: {
    location: 'New York, USA',
    title: 'User study for technology applications',
    duration: 'Duration 90 minutes',
    payment:['Sibling Participants: $100 per person',],
  },
  india: {
    location: 'India',
    title: 'User study for technology applications',
    duration: 'Duration 90 minutes',
    payment: ['Individual Participants: ₹2500 per person','Sibling Participants: ₹5000 per person',],
  },
  spain: {
    location: 'Spain',
    title: isSpanish
      ? 'Estudio de usuarios para aplicaciones tecnológicas'
      : 'User study for technology applications',
    duration: isSpanish ? 'Duración 90 minutos' : 'Duration 90 minutes',
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
    duration: isSpanish ? 'Duración 90 minutos' : 'Duration 90 minutes',
    payment: isSpanish
      ? [
        'Participantes individuales: 900 MXN Pesos por persona',
        'Participantes hermanos/as: 1200 MXN Pesos por persona',
      ]
    : [
        'Individual Participants: 900 MXN Pesos per person',
        'Sibling Participants: 1200 MXN Pesos per person',
      ],
  },
  poland: {
    location: isPolish ? 'Polska' : 'Poland',
    title: isPolish
      ? 'Badanie użytkowników aplikacji technologicznych'
      : 'User study for technology applications',
    duration: isPolish ? 'Czas trwania 90 minut' : 'Duration 90 minutes',
    payment: isPolish
      ? [
        'Uczestnicy indywidualni: 200 PLN za osobę',
        'Uczestnicy rodzeństwa: 285 PLN za osobę',
      ]
    : [
        'Individual Participants: 200 Polish Zloty per person',
        'Sibling Participants: 285 Polish Zloty per person',
      ],
  },
};

const selectedStudy = studyInfo[country] || studyInfo.leeds;

const siblingPayment =
  country === 'leeds'
    ? '£100'
    : country === 'poland'
    ? '285 Polish Zloty'
    : country === 'spain'
    ? '€100'
    : country === 'usa'
    ? '$100'
    : country === 'mexico'
    ? '1200 Pesos'
    : country === 'india'
    ? '₹5000'
    : '£100';
  return (
    <Layout>
      <section className="bg-[#0D1B3E] py-12 px-4">
      <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-[#F4F6FB] p-7 shadow-2xl md:p-12">
          <div className="border border-gray-300 p-6 md:p-10 mb-7">
            <p className="mb-3 flex items-center gap-2 text-lg font-bold text-[#0A0F1E]">
            
             <span>{selectedStudy.location}</span>
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#0A0F1E] mb-6">{selectedStudy.title}</h1>

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
                className="font-bold text-[#C70039] underline"
              >
                🇬🇧 English version
              </Link>
            ) : country === 'spain' || country === 'mexico' ? (
              <Link
                href={`/live-studies-application?country=${country}&lang=es`}
                className="font-bold text-[#C70039] underline"
              >
                🇪🇸 Spanish version
              </Link>
            ) : country === 'poland' ? (
              <Link
                href={`/live-studies-application?country=${country}&lang=pl`}
                className="font-bold text-[#C70039] underline"
              >
                🇵🇱 Polish version
              </Link>
            ) : null}
          </div>

          </div>
          
          <form
            name="live-studies-application"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/Thankyou"
          >
            <input type="hidden" name="form-name" value="live-studies-application" />
            <p className="hidden">
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>

            <h2 className="mb-4 text-2xl font-black tracking-tight text-[#0A0F1E] md:text-4xl">{isSpanish
              ? 'Cuéntanos acerca de ti.'
              : isPolish
              ? 'Opowiedz nam o sobie.'
              : 'Tell us about yourself'}</h2>
            <p className="text-[17px] mb-7 text-[#0A0F1E]">
            {isSpanish
              ? 'Este es un estudio inclusivo. Se anima a participar a personas de todos los géneros y razas. Debe tener más de 16 años para participar.'
              : isPolish
              ? 'To jest badanie integracyjne. Zachęcamy do udziału osoby wszystkich płci i ras. Aby wziąć udział, musisz mieć ukończone 16 lat.'
              : 'This is an inclusive study. All genders and races are encouraged to participate.You must be 16+ to participate.'}
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
                placeholder={
                  isSpanish
                    ? 'ej. +34 612 345 678'
                    : isPolish
                    ? 'np. +48 123 456 789'
                    : 'eg. +44 7123 456789'
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
                  : 'What is your gender'
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
                ? 'Etnia cultural'
                : isPolish
                ? 'Pochodzenie etniczne'
                : 'Cultural Ethnicity'}
            </label>

            <p className={helpClass}>
              {isSpanish
                ? '¿Con qué etnia cultural te identificas? Esta NO es tu nacionalidad. Por favor selecciona la herencia de tu familia.'
                : isPolish
                ? 'Z jakim pochodzeniem etnicznym się identyfikujesz? To NIE jest Twoja narodowość. Wybierz pochodzenie swojej rodziny.'
                : "What cultural ethnicity do you identify as? This is NOT your nationality. Please select your family's heritage."}
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
                  ? 'Selecciona tu etnia...'
                  : isPolish
                  ? 'Wybierz swoje pochodzenie...'
                  : 'Select your ethnicity...'}
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
                    : 'Please specify your ethnicity'
                }
                className={`${fieldClass} mt-4`}
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
                  className="flex cursor-pointer items-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#0A0F1E] transition hover:border-[#C9A84C]"
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
                  : 'eg. 1980'
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
                : 'In which age range do you fit into?'
            }
            name="age_range"
            options={['15 - 34', '35 - 49', '50 - 64', '65+']}
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

          <Checkbox name="future_studies_opt_in" value="Yes">
            {isSpanish
              ? 'Sí - Me gustaría ser contactado sobre futuros estudios'
              : isPolish
              ? 'Tak - Chciał(a)bym otrzymywać informacje o przyszłych badaniach'
              : 'Yes - I would like to be contacted about participating in future studies'}
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
                  : 'Data & GDPR agreement'}
              </p>

              <ul className="mb-6 list-disc pl-8 text-[16px] leading-7 text-[#0A0F1E]">
                {gdprTerms.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ul>

              <Checkbox name="terms_confirmation" value="Confirmed" required>
                {isSpanish
                  ? 'Confirmo que he leído, entendido y acepto los términos del estudio, la declaración de salud y seguridad y el aviso de procesamiento de datos.'
                  : isPolish
                  ? 'Potwierdzam, że przeczytałem/am, zrozumiałem/am i akceptuję warunki badania, deklarację zdrowia i bezpieczeństwa oraz informacje o przetwarzaniu danych.'
                  : 'I confirm that I have read, understood and agree to the study terms, health and safety declaration, and data processing notice.'}
              </Checkbox>
            </div>
            <p className="mb-5 text-sm leading-6 text-gray-600">
              {isSpanish
                ? 'Tu información solo será utilizada para el reclutamiento y evaluación de elegibilidad para estudios de investigación. Puedes solicitar la eliminación o retirada de tus datos contactando a info@finxt.uk.'
                : isPolish
                ? 'Twoje dane będą wykorzystywane wyłącznie do rekrutacji i oceny kwalifikacji do badań. Możesz poprosić o usunięcie lub wycofanie swoich danych, kontaktując się z info@finxt.uk.'
                : 'Your information will only be used for research study recruitment and eligibility screening. You can request deletion or withdrawal of your data by contacting info@finxt.uk.'}
            </p>

            <button
              type="submit"
              className="rounded-lg bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#0A0F1E] transition hover:bg-[#E8C96A]"
            >
              {isSpanish
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
