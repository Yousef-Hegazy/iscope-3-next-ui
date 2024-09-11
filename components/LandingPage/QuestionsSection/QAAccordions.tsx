"use client";

import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

const stepVars: Variants = {
  normal: {},
  inView: {
    height: "auto",
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.07,
    },
  },
};

const stepTextVars: Variants = {
  normal: {
    opacity: 0,
    x: 20,
  },
  inView: {
    opacity: 1,
    x: 0,
  },
};

const Step = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div>
      <motion.p variants={stepTextVars}>{children}</motion.p>
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
        // isCompact
        itemClasses={{
          base: "mb-1",
          titleWrapper: "mb-0 pb-0 gap-0",
          // heading: "border-b border-default-500",
          content: "border-t border-default-500 py-4",
        }}
      >
        <AccordionItem key="1" aria-label={t("qa.first")} title={t("qa.first")}>
          <motion.div
            variants={stepVars}
            initial="normal"
            whileInView="inView"
            className="text-start space-y-2 text-sm ltr:hidden"
          >
            <Step>1. يقوم صاحب الصلاحية بالدخول على العقد المراد عمل محضر استلام نهائى له</Step>
            <Step>2. يقوم صاحب الصلاحية بالدخول على الإجراءات المتاح تنفيذها</Step>
            <Step>3. يقوم صاحب الصلاحية بالضغط على إضافة محضر استلام نهائي لعقد</Step>

            <Step>4. يقوم صاحب الصلاحية باعتماد محضر الاستلام النهائي</Step>
            <Step>5. تتحول حالة العقد من تم الاستلام الابتدائي الى تم الاستلام النهائي</Step>
          </motion.div>

          <motion.div
            variants={stepVars}
            initial="normal"
            whileInView="inView"
            className="text-start space-y-2 text-sm rtl:hidden"
          >
            <Step>1. The authorized person enters the contract for which a final receipt report is to be made</Step>

            <Step>2. The authorized person enters the procedures that can be implemented</Step>
            <Step>3. The authorized person clicks on Add Final Receipt Report for Contract</Step>

            <Step>4. The authorized person approves the final receipt report</Step>
            <Step>5. The contract status changes from Initially Received to Final Received</Step>
          </motion.div>
        </AccordionItem>

        <AccordionItem key="2" aria-label={t("qa.second")} title={t("qa.second")}>
          <motion.div
            variants={stepVars}
            initial="normal"
            whileInView="inView"
            className="text-start space-y-2 text-sm ltr:hidden"
          >
            <Step> 1-يقوم صاحب الصلاحية (المقاول)بعمل طلب مستخلص بعد الاستلام المالى و الفني لبند او اكثر.</Step>
            <Step>2-يقوم صاحب الصلاحية(الوكالة او البلدية) باعتماد طلب المستخلص طبقاُ لمستويات الموافقة .</Step>
            <Step>3-يقوم صاحب الصلاحية(الوكالة او البلدية) باخر اعتماد طلب المستخلص طبقاً لمستويات الموافقة .</Step>

            <Step>4-يقوم صاحب الصلاحية(المقاول او البلدية) باصدار امر الدفع للمستخلص.</Step>
            <Step>5- يتم تحديث نسبة الانجاز المالي </Step>
          </motion.div>

          <motion.div
            variants={stepVars}
            initial="normal"
            whileInView="inView"
            className="text-start space-y-2 text-sm rtl:hidden"
          >
            <Step>
              1- The authorized person (contractor) makes a request for an extract after the financial and technical
              receipt of one or more items.
            </Step>
            <Step>
              2- The authorized person (agency or municipality) approves the extract request according to the approval
              levels.
            </Step>
            <Step>
              3- The authorized person (agency or municipality) makes the final approval of the extract request
              according to the approval levels.
            </Step>

            <Step> 4- The authorized person (contractor or municipality) issues a payment order for the extract.</Step>
            <Step> 5- The financial achievement percentage is updated.</Step>
          </motion.div>
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
