"use client";

import { cn } from "@/lib/utils";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { ReactNode, useMemo } from "react";

const stepsContainer: Variants = {
  normal: {},
  inView: {
    height: "auto",
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.07,
    },
  },
};

const step: Variants = {
  normal: {
    opacity: 0,
    x: 20,
  },
  inView: {
    opacity: 1,
    x: 0,
  },
};

const iconContainer: Variants = {
  normal: {
    opacity: 0,
    scale: 0.5,
  },
  inView: {
    transition: {
      delayChildren: 0.1,
    },
    opacity: 1,
    scale: 1,
  },
};

const icon: Variants = {
  normal: {
    pathLength: 0,
  },
  inView: {
    pathLength: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Step = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div className="flex flex-row items-center gap-x-2">
      <motion.p className="flex-1" variants={step}>
        {children}
      </motion.p>

      <motion.div
        className="flex items-center justify-center rounded-full bg-zahid-blue-bg p-[2px] shadow-lg shadow-zahid-blue-bg/30 flex-shrink-0 origin-center"
        variants={iconContainer}
      >
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <motion.path
            className="text-white origin-left"
            variants={icon}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            fill="none"
            d="m4.5 12.75l6 6l9-13.5"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

const StepsContainer = ({ children, className }: { children: ReactNode; className?: string }) => {
  const classes = useMemo(() => cn("text-start space-y-2 text-sm", className), [className]);

  return (
    <motion.div variants={stepsContainer} initial="normal" whileInView="inView" className={classes}>
      {children}
    </motion.div>
  );
};

const QAAccordions = () => {
  const t = useTranslations("landingPage");

  return (
    <div className="mt-6">
      <Accordion
        variant="splitted"
        className="transition-all"
        itemClasses={{
          base: "mb-1",
          titleWrapper: "mb-0 pb-0 gap-0",
          content: "border-t border-default-500 py-4",
        }}
      >
        <AccordionItem key="1" aria-label={t("qa.first")} title={t("qa.first")}>
          <StepsContainer className="ltr:hidden">
            <Step>1. يقوم صاحب الصلاحية بالدخول على العقد المراد عمل محضر استلام نهائى له</Step>
            <Step>2. يقوم صاحب الصلاحية بالدخول على الإجراءات المتاح تنفيذها</Step>
            <Step>3. يقوم صاحب الصلاحية بالضغط على إضافة محضر استلام نهائي لعقد</Step>

            <Step>4. يقوم صاحب الصلاحية باعتماد محضر الاستلام النهائي</Step>
            <Step>5. تتحول حالة العقد من تم الاستلام الابتدائي الى تم الاستلام النهائي</Step>
          </StepsContainer>

          <StepsContainer className="rtl:hidden">
            <Step>1. The authorized person enters the contract for which a final receipt report is to be made</Step>

            <Step>2. The authorized person enters the procedures that can be implemented</Step>
            <Step>3. The authorized person clicks on Add Final Receipt Report for Contract</Step>

            <Step>4. The authorized person approves the final receipt report</Step>
            <Step>5. The contract status changes from Initially Received to Final Received</Step>
          </StepsContainer>
        </AccordionItem>

        <AccordionItem key="2" aria-label={t("qa.second")} title={t("qa.second")}>
          <StepsContainer className="ltr:hidden">
            <Step> 1. يقوم صاحب الصلاحية (المقاول)بعمل طلب مستخلص بعد الاستلام المالى و الفني لبند او اكثر.</Step>
            <Step>2. يقوم صاحب الصلاحية(الوكالة او البلدية) باعتماد طلب المستخلص طبقاُ لمستويات الموافقة .</Step>
            <Step>3. يقوم صاحب الصلاحية(الوكالة او البلدية) باخر اعتماد طلب المستخلص طبقاً لمستويات الموافقة .</Step>

            <Step>4. يقوم صاحب الصلاحية(المقاول او البلدية) باصدار امر الدفع للمستخلص.</Step>
            <Step>5. يتم تحديث نسبة الانجاز المالي </Step>
          </StepsContainer>

          <StepsContainer className="rtl:hidden">
            <Step>
              1. The authorized person (contractor) makes a request for an extract after the financial and technical
              receipt of one or more items.
            </Step>
            <Step>
              2. The authorized person (agency or municipality) approves the extract request according to the approval
              levels.
            </Step>
            <Step>
              3. The authorized person (agency or municipality) makes the final approval of the extract request
              according to the approval levels.
            </Step>

            <Step> 4. The authorized person (contractor or municipality) issues a payment order for the extract.</Step>
            <Step> 5. The financial achievement percentage is updated.</Step>
          </StepsContainer>
        </AccordionItem>

        <AccordionItem key="2" aria-label={t("qa.second")} title={t("qa.second")}>
          <StepsContainer className="ltr:hidden">
            <Step> 1. يقوم صاحب الصلاحية (المقاول)بعمل طلب مستخلص بعد الاستلام المالى و الفني لبند او اكثر.</Step>
            <Step>2. يقوم صاحب الصلاحية(الوكالة او البلدية) باعتماد طلب المستخلص طبقاُ لمستويات الموافقة .</Step>
            <Step>3. يقوم صاحب الصلاحية(الوكالة او البلدية) باخر اعتماد طلب المستخلص طبقاً لمستويات الموافقة .</Step>

            <Step>4. يقوم صاحب الصلاحية(المقاول او البلدية) باصدار امر الدفع للمستخلص.</Step>
            <Step>5. يتم تحديث نسبة الانجاز المالي </Step>
          </StepsContainer>

          <StepsContainer className="rtl:hidden">
            <Step>
              1. The authorized person (contractor) makes a request for an extract after the financial and technical
              receipt of one or more items.
            </Step>
            <Step>
              2. The authorized person (agency or municipality) approves the extract request according to the approval
              levels.
            </Step>
            <Step>
              3. The authorized person (agency or municipality) makes the final approval of the extract request
              according to the approval levels.
            </Step>

            <Step> 4. The authorized person (contractor or municipality) issues a payment order for the extract.</Step>
            <Step> 5. The financial achievement percentage is updated.</Step>
          </StepsContainer>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default QAAccordions;
// const AppAccordion: FC<AccordionProps & HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
//   return <Accordion {...props} />;
// };

// export default AppAccordion;
