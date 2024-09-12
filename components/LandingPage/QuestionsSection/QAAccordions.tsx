"use client";

import { cn } from "@/lib/utils";
import { Accordion, AccordionItem, Divider, Pagination, useAccordion } from "@nextui-org/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { ReactNode, useCallback, useMemo, useState } from "react";

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

const pageVariants: Variants = {
  initialPrev: { opacity: 0, x: "100%", transition: { duration: 0.25 } },
  initialNext: { opacity: 0, x: "-100%", transition: { duration: 0.25 } },
  animate: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

const Step = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div className="flex flex-row items-start gap-x-2">
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

const PagesContainer = ({
  children,
  active,
  pageSize = 4,
}: {
  children: ReactNode;
  active: number;
  pageSize?: number;
}) => {
  const [page, setPage] = useState(active);
  const [isNext, setIsNext] = useState(false);
  const pages = Math.ceil(React.Children.count(children) / pageSize);

  const handleSetPage = useCallback(
    (newPage: number) => {
      if (newPage < page) {
        setIsNext(false);
      } else if (newPage > page) {
        setIsNext(true);
      }
      setPage(newPage);
    },
    [page]
  );

  return (
    <div className="mt-6 flex flex-col gap-y-4 justify-center items-stretch overflow-hidden">
      <AnimatePresence mode="wait">
        {React.Children.toArray(children)
          .slice((page - 1) * pageSize, page * pageSize)
          .map((child, index) => (
            <motion.div
              key={"page-" + page}
              variants={pageVariants}
              initial={isNext ? "initialNext" : "initialPrev"}
              animate="animate"
              exit={isNext ? "initialNext" : "initialPrev"}
            >
              {child}
            </motion.div>
          ))}
      </AnimatePresence>

      <div className="w-full h-full p-2 bg-white shadow-md rounded-xl flex items-center justify-center">
        <Pagination total={pages} color="primary" onChange={handleSetPage} />
      </div>
    </div>
  );
};

const AccordionContainer = ({ children }: { children: any }) => {
  return (
    <Accordion
      variant="splitted"
      selectionMode="multiple"
      fullWidth
      itemClasses={{
        base: "mb-1",
        titleWrapper: "mb-0 pb-0 gap-0",
        content: "border-t border-default-500 py-4",
      }}
    >
      {children}
    </Accordion>
  );
};

const QAAccordions = () => {
  const t = useTranslations("landingPage");
  const { Component: PagedAccordion } = useAccordion({
    selectionMode: "multiple",
    variant: "splitted",
    fullWidth: true,
    itemClasses: {
      base: "mb-1",
      titleWrapper: "mb-0 pb-0 gap-0",
      content: "border-t border-default-500 py-4",
    },
    children: [],
  });

  return (
    <PagesContainer active={1} pageSize={1}>
      <AccordionContainer>
        <AccordionItem key="1" aria-label={t("qa.1")} title={t("qa.1")}>
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

        <AccordionItem key="2" aria-label={t("qa.2")} title={t("qa.2")}>
          <StepsContainer className="ltr:hidden">
            <Step>1. يقوم صاحب الصلاحية (المقاول)بعمل طلب مستخلص بعد الاستلام المالى و الفني لبند او اكثر.</Step>
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

            <Step>4. The authorized person (contractor or municipality) issues a payment order for the extract.</Step>
            <Step> 5. The financial achievement percentage is updated.</Step>
          </StepsContainer>
        </AccordionItem>

        <AccordionItem key="3" aria-label={t("qa.3")} title={t("qa.3")}>
          <StepsContainer className="ltr:hidden">
            <Step>
              1. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على العقد المراد عمل محضر عرض بسحب لعقد له
            </Step>
            <Step>2. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على الإجراءات المتاح تنفيذها</Step>
            <Step>3. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية)بالضغط على محضر عرض بسحب لعقد</Step>

            <Step>4. يقوم صاحب الصلاحية (البلدية/مدير النظام/الوكالة) بإعتماد محضر عرض بسحب لعقد</Step>
            <Step>5. يتم تحويل حالة العقد الى تحت اجراءات السحب</Step>
          </StepsContainer>

          <StepsContainer className="rtl:hidden">
            <Step>
              1. The authorized person (system manager/agency/municipality) enters the contract for which a contract
              withdrawal offer report is to be made
            </Step>
            <Step>
              2. The authorized person (system manager/agency/municipality) enters the procedures available for
              execution
            </Step>
            <Step>
              3. The authorized person (system manager/agency/municipality) clicks on Contract withdrawal offer report
            </Step>

            <Step>
              4. The authorized person (municipality/system manager/agency) approves Contract withdrawal offer report
            </Step>
            <Step>5. The contract status is transferred to under withdrawal procedures</Step>
          </StepsContainer>
        </AccordionItem>
      </AccordionContainer>

      <AccordionContainer>
        <AccordionItem key="1" aria-label={t("qa.4")} title={t("qa.4")}>
          <StepsContainer className="ltr:hidden">
            <Step>
              1. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على العقد المدمج المراد عمل محضر استلام نهائى
              له
            </Step>
            <Step>2. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على الإجراءات المتاح تنفيذها</Step>
            <Step>3. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية)بالضغط على إضافة محضر استلام نهائي لعقد</Step>

            <Step>4. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) باعتماد محضر الاستلام النهائي</Step>
            <Step>5. تتحول حالة العقد المدمج من تم الاستلام الابتدائي الى تم الاستلام النهائي</Step>
          </StepsContainer>

          <StepsContainer className="rtl:hidden">
            <Step>
              1. The authorized person (system manager/agency/municipality) enters the integrated contract for which a
              final receipt report is to be made
            </Step>
            <Step>
              2. The authorized person (system manager/agency/municipality) enters the procedures that can be
              implemented
            </Step>
            <Step>
              3. The authorized person (system manager/agency/municipality) clicks on Add Final Receipt Report for
              Contract
            </Step>

            <Step>4. The authorized person (system manager/agency/municipality) approves the final receipt report</Step>
            <Step>5. The status of the integrated contract changes from Initially Received to Final Received</Step>
          </StepsContainer>
        </AccordionItem>

        <AccordionItem key="2" aria-label={t("qa.5")} title={t("qa.5")}>
          <StepsContainer className="ltr:hidden">
            <Step>
              1. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على العقد المراد عمل محضر استلام ابتدائي له
            </Step>
            <Step>2. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على الإجراءات المتاح تنفيذها</Step>
            <Step>3. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية)بالضغط على إضافة محضر استلام ابتدائي لعقد</Step>

            <Step>4. تتحول حالة العقد الى جاري الاستلام الابتدائي</Step>
            <Step>5. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) باعتماد محضر الاستلام الابتدائي</Step>
            <Step>6. تتحول حالة العقد الى تم الاستلام الابتدائي</Step>
          </StepsContainer>

          <StepsContainer className="rtl:hidden">
            <Step>
              1. The authorized person (system manager/agency/municipality) enters the contract for which a preliminary
              receipt report is to be made
            </Step>
            <Step>
              2. The authorized person (system manager/agency/municipality) enters the procedures that can be executed
            </Step>
            <Step>
              3. The authorized person (system manager/agency/municipality) clicks on Add a preliminary receipt report
              for a contract
            </Step>

            <Step>4. The contract status changes to Initial receipt in progress</Step>
            <Step>
              5. The authorized person (system manager/agency/municipality) approves the preliminary receipt report
            </Step>
            <Step>6. The contract status changes to Initial receipt done</Step>
          </StepsContainer>
        </AccordionItem>

        <AccordionItem key="3" aria-label={t("qa.6")} title={t("qa.6")}>
          <StepsContainer className="ltr:hidden">
            <Step>
              1. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على العقد المدمج المراد عمل محضر استلام
              ابتدائى له
            </Step>
            <Step>2. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على الإجراءات المتاح تنفيذها</Step>
            <Step>3. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية)بالضغط على إضافة محضر استلام ابتدائى لعقد</Step>

            <Step>4. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) باعتماد محضر الاستلام الابتدائى</Step>
            <Step>5. تتحول حالة العقد المدمج الي تم الاستلام الابتدائي</Step>
          </StepsContainer>

          <StepsContainer className="rtl:hidden">
            <Step>
              1. The authorized person (system manager/agency/municipality) enters the merged contract for which a
              preliminary receipt report is to be made
            </Step>
            <Step>
              2. The authorized person (system manager/agency/municipality) enters the procedures that can be
              implemented
            </Step>
            <Step>
              3. The authorized person (system manager/agency/municipality) clicks on Add a preliminary receipt report
              for the contract
            </Step>

            <Step>
              4. The authorized person (system manager/agency/municipality) approves the preliminary receipt report
            </Step>
            <Step>5. The status of the merged contract changes to Initially Received</Step>
          </StepsContainer>
        </AccordionItem>
      </AccordionContainer>
    </PagesContainer>
  );
};

export default QAAccordions;
