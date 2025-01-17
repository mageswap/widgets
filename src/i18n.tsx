import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, SupportedLocale } from 'constants/locales'
import {
  af,
  ar,
  ca,
  cs,
  da,
  de,
  el,
  en,
  es,
  fi,
  fr,
  he,
  hu,
  id,
  it,
  ja,
  ko,
  nl,
  no,
  pl,
  pt,
  ro,
  ru,
  sr,
  sv,
  sw,
  tr,
  uk,
  vi,
  zh,
} from 'make-plural/plurals'
import { PluralCategory } from 'make-plural/plurals'
import { ReactNode, useEffect, useMemo } from 'react'

type LocalePlural = {
  [key in SupportedLocale]: (n: number | string, ord?: boolean) => PluralCategory
}

const plurals: LocalePlural = {
  'af-ZA': af,
  'ar-SA': ar,
  'ca-ES': ca,
  'cs-CZ': cs,
  'da-DK': da,
  'de-DE': de,
  'el-GR': el,
  'en-US': en,
  'es-ES': es,
  'fi-FI': fi,
  'fr-FR': fr,
  'he-IL': he,
  'hu-HU': hu,
  'id-ID': id,
  'it-IT': it,
  'ja-JP': ja,
  'ko-KR': ko,
  'nl-NL': nl,
  'no-NO': no,
  'pl-PL': pl,
  'pt-BR': pt,
  'pt-PT': pt,
  'ro-RO': ro,
  'ru-RU': ru,
  'sr-SP': sr,
  'sv-SE': sv,
  'sw-TZ': sw,
  'tr-TR': tr,
  'uk-UA': uk,
  'vi-VN': vi,
  'zh-CN': zh,
  'zh-TW': zh,
  pseudo: en,
}

export async function dynamicActivate(locale: SupportedLocale) {
  i18n.loadLocaleData(locale, { plurals: () => plurals[locale] as any })
  try {
    const catalog = await import(`./locales/${locale}.js`)
    // Bundlers will either export it as default or as a named export named default.
    i18n.load(locale, catalog.messages || catalog.default.messages)
  } catch { }
  i18n.activate(locale)
}

interface ProviderProps {
  locale?: SupportedLocale
  forceRenderAfterLocaleChange?: boolean
  onActivate?: (locale: SupportedLocale) => void
  children: ReactNode
}

export function TestableProvider({ locale, forceRenderAfterLocaleChange, children }: ProviderProps) {
  return <I18nProvider i18n={i18n}>{children}</I18nProvider>
}

export function Provider({ locale, forceRenderAfterLocaleChange = true, onActivate, children }: ProviderProps) {
  const processedLocale = useMemo(() => {
    if (locale && ![...SUPPORTED_LOCALES, 'pseudo'].includes(locale)) {
      console.warn(`Unsupported locale: ${locale}. Falling back to ${DEFAULT_LOCALE}.`)
      return DEFAULT_LOCALE
    }
    return locale ?? DEFAULT_LOCALE
  }, [locale])

  useEffect(() => {
    dynamicActivate(processedLocale)
      .then(() => onActivate?.(processedLocale))
      .catch((error) => {
        console.error('Failed to activate locale', processedLocale, error)
      })
  }, [processedLocale, onActivate])

  // Initialize the locale immediately if it is DEFAULT_LOCALE, so that keys are shown while the translation messages load.
  // This renders the translation _keys_, not the translation _messages_, which is only acceptable while loading the DEFAULT_LOCALE,
  // as [there are no "default" messages](https://github.com/lingui/js-lingui/issues/388#issuecomment-497779030).
  // See https://github.com/lingui/js-lingui/issues/1194#issuecomment-1068488619.
  if (i18n.locale === undefined && locale === DEFAULT_LOCALE) {
    const pluralsGet = () => plurals[DEFAULT_LOCALE] as any
    i18n.load(DEFAULT_LOCALE, { plurals: pluralsGet() })
    i18n.activate(DEFAULT_LOCALE)
  }

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>
}
