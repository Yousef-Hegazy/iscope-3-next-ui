"use client";

import { routing } from "@/app/i18n/routing";
import { createCalendar, parseAbsoluteToLocal } from "@internationalized/date";
import { Button, ButtonGroup, DatePicker, DatePickerProps } from "@nextui-org/react";
import { I18nProvider } from "@react-aria/i18n";
import { FC, memo, useEffect, useMemo, useState } from "react";
import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";
import { useStepContext } from "./StepContext";
import { useTranslations } from "next-intl";

// const umAlqura = new IslamicUmalquraCalendar();
// const greg = new GregorianCalendar();

const NextStepperDatePicker: FC<DatePickerProps> = memo(({ ...props }) => {
  const { setErrors } = useStepContext();
  const [locale, setLocale] = useState<(typeof routing.locales)[number]>("ar");
  const t = useTranslations("common");
  const localeOpts = useMemo(
    () =>
      locale === "ar"
        ? {
            lang: "ar-SA",
            localeString: new Intl.Locale("ar", {
              calendar: "islamic-umalqura",
              language: "ar",
              region: "SA",
            }).toString(),
            dir: "rtl",
          }
        : {
            lang: "en-US",
            localeString: new Intl.Locale("en", {
              calendar: "gregory",
              language: "en",
              region: "SA",
            }).toString(),
            dir: "ltr",
          },
    [locale]
  );

  // console.log(localeOpts);

  useEffect(() => {
    if (props.isInvalid) {
      setErrors((prev) => {
        if (!props.name) return prev;
        if (prev[props.name as string]) return prev;

        return {
          ...prev,
          [props.name as string]: true,
        };
      });
    } else {
      setErrors((prev) => {
        if (!props.name) return prev;
        if (!prev[props.name as string]) return prev;

        return {
          ...prev,
          [props.name as string]: false,
        };
      });
    }
  }, [props.isInvalid, props.name, setErrors]);

  // const createCalendar = useCallback(
  //   (_: SupportedCalendars) => {
  //     switch (locale) {
  //       case "ar":
  //         return umAlqura;
  //       case "en":
  //         return greg;
  //       default:
  //         throw new Error("Unsupported locale");
  //     }
  //   },
  //   [locale]
  // );

  return (
    <I18nProvider locale={localeOpts.localeString}>
      <DatePicker
        key={locale + props.name}
        className="m-0"
        showMonthAndYearPickers
        {...props}
        variant={props.variant || "bordered"}
        labelPlacement={props.labelPlacement || "outside"}
        minValue={locale === "ar" ? parseAbsoluteToLocal(new Date("1300-01-01").toISOString()) : undefined}
        translate="yes"
        lang="ar-SA"
        calendarProps={{
          translate: "yes",
          lang: "ar-SA",
          dir: "rtl",
          createCalendar: (_) => createCalendar(locale === "ar" ? "islamic-umalqura" : "gregory"),
        }}
        CalendarBottomContent={
          <ButtonGroup size="sm" className="flex flex-row justify-center w-full rounded-medium rounded-t-none">
            <Button
              color={locale === "ar" ? "primary" : "default"}
              onClick={() => setLocale("ar")}
              className="flex-1 rounded-t-none"
            >
              {t("hijri")}
            </Button>
            <Button
              color={locale === "en" ? "primary" : "default"}
              onClick={() => setLocale("en")}
              className="flex-1 rounded-t-none"
            >
              {t("gregorian")}
            </Button>
          </ButtonGroup>
        }
      />
    </I18nProvider>
  );
});

NextStepperDatePicker.displayName = "NextStepperDatePicker";

interface Props extends DatePickerProps {
  control: Control<FieldValues>;
  name: string;
  rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">;
}

const StepperDatePicker = memo(({ control, name, rules, ...props }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { invalid } }) => (
        <NextStepperDatePicker {...props} {...field} isInvalid={invalid} />
      )}
    />
  );
});

StepperDatePicker.displayName = "StepperDatePicker";

export default StepperDatePicker;
