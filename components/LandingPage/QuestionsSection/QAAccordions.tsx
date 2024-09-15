"use client";

import { cn } from "@/lib/utils";
import { Accordion, AccordionItem, Pagination } from "@nextui-org/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { ReactNode, useCallback, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";

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
  initial: (direction) => ({ opacity: 0, x: direction > 0 ? 1000 : -1000 }),
  animate: { opacity: 1, x: 0, transition: { duration: 0.35 } },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -1000 : 1000, transition: { duration: 0.25 } }),
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

const PagesContainer = ({ children, pageSize = 4 }: { children: ReactNode; pageSize?: number }) => {
  const [[page, direction], setPage] = useState([1, 0]);
  const pages = Math.ceil(React.Children.count(children) / pageSize);

  const handleSetPage = useCallback(
    (newPage: number) => {
      setPage([newPage, newPage > page ? 1 : -1]);
    },
    [page]
  );

  return (
    <div className="mt-6 flex flex-col gap-y-4 justify-center overflow-hidden min-h-[333px]">
      <AnimatePresence mode="wait">
        {React.Children.toArray(children)
          .slice((page - 1) * pageSize, page * pageSize)
          .map((child, index) => (
            <motion.div
              key={page + index}
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {child}
            </motion.div>
          ))}
      </AnimatePresence>
      <div className="w-full h-full p-2 bg-white shadow-md rounded-xl flex items-center justify-center mt-auto">
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

  return (
    <PagesContainer pageSize={1}>
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
        <AccordionItem key="4" aria-label={t("qa.4")} title={t("qa.4")}>
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

        <AccordionItem key="5" aria-label={t("qa.5")} title={t("qa.5")}>
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

        <AccordionItem key="6" aria-label={t("qa.6")} title={t("qa.6")}>
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

      <AccordionContainer>
        <AccordionItem key="7" aria-label={t("qa.7")} title={t("qa.7")}>
          <StepsContainer className="ltr:hidden">
            <Step>1. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على العقد المراد عمل طلب ايقاف له</Step>
            <Step>2. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على الإجراءات المتاح تنفيذها</Step>
            <Step>3. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية)بالضغط على طلب ايقاف لعقد</Step>
            <Step>4. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية)بإعتماد طلب الايقاف</Step>
            <Step>5. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بإضافة محضر الايقاف للعقد</Step>
            <Step>6. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية)بإعتماد محضر الايقاف</Step>
            <Step>7. تتحول حالة العقد الى متوقف</Step>
          </StepsContainer>

          <StepsContainer className="rtl:hidden">
            <Step>
              1. The authorized person (system manager/agency/municipality) enters the contract for which a suspension
              request is to be made
            </Step>
            <Step>
              2. The authorized person (system manager/agency/municipality) enters the procedures that can be executed
            </Step>
            <Step>
              3. The authorized person (system manager/agency/municipality) clicks on the request to suspend the
              contract
            </Step>
            <Step>4. The authorized person (system manager/agency/municipality) approves the suspension request</Step>
            <Step>
              5. The authorized person (system manager/agency/municipality) adds the suspension report to the contract
            </Step>
            <Step>6. The authorized person (system manager/agency/municipality) approves the suspension report</Step>
            <Step>7. The contract status changes to suspended</Step>
          </StepsContainer>
        </AccordionItem>

        <AccordionItem key="8" aria-label={t("qa.8")} title={t("qa.8")}>
          <StepsContainer className="ltr:hidden">
            <Step>
              1. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على العقد المدمج المراد عمل طلب ايقاف له
            </Step>
            <Step>2. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على الإجراءات المتاح تنفيذها</Step>
            <Step>3. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية)بالضغط على طلب ايقاف لعقد مدمج</Step>
            <Step>4. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية)بإعتماد طلب الايقاف</Step>
            <Step>5. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بإضافة محضر الايقاف للعقد</Step>
            <Step>6. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية)بإعتماد محضر الايقاف</Step>
            <Step>7. تتحول حالة العقد المدمج و العقود الفرعية الى متوقف</Step>
          </StepsContainer>

          <StepsContainer className="rtl:hidden">
            <Step>
              1. The authorized person (system manager/agency/municipality) enters the integrated contract for which a
              request for suspension is to be made
            </Step>
            <Step>
              2. The authorized person (system manager/agency/municipality) enters the procedures available for
              execution
            </Step>
            <Step>
              3. The authorized person (system manager/agency/municipality) clicks on Request to suspend the integrated
              contract
            </Step>
            <Step>4. The authorized person (system manager/agency/municipality) approves the suspension request</Step>
            <Step>
              5. The authorized person (system manager/agency/municipality) adds the suspension report to the contract
            </Step>
            <Step>6. The authorized person (system manager/agency/municipality) approves the suspension report</Step>
            <Step>7. The status of the integrated contract and subcontracts changes to suspended</Step>
          </StepsContainer>
        </AccordionItem>

        <AccordionItem key="9" aria-label={t("qa.9")} title={t("qa.9")}>
          <StepsContainer className="ltr:hidden">
            <Step>
              1. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على العقد المراد عملتعديل جدول كميات له
            </Step>
            <Step>2. يقوم صاحب الصلاحية (مدير النظام/الوكالة/البلدية) بالدخول على الإجراءات المتاح تنفيذها</Step>
            <Step>3. يقوم صاحب الصلاحية (البلدية/ الوكالة/ مدير النظام) بالضغط على طلب تعديل جدول الكميات.</Step>
            <Step>4. يقوم صاحب الصلاحية(البلدية) باعتماد الاستشاري لطلب تعديل جدول الكميات.</Step>
            <Step>5. يقوم صاحب الصلاحية(الوكالة) باعتماد المالك لطلب تعديل جدول الكميات.</Step>
            <Step>6. يتم تعديل جدول الكميات طبقاً لطلب التعديل المقدم.</Step>
          </StepsContainer>

          <StepsContainer className="rtl:hidden">
            <Step>
              1. The authorized person (system manager/agency/municipality) enters the contract for which the quantity
              schedule is to be modified
            </Step>
            <Step>
              2. The authorized person (system manager/agency/municipality) enters the procedures available for
              implementation
            </Step>
            <Step>
              3. The authorized person (municipality/agency/system manager) clicks on the quantity schedule modification
              request.
            </Step>
            <Step>
              4. The authorized person (municipality) approves the consultant to request the quantity schedule
              modification.
            </Step>
            <Step>
              5. The authorized person (agency) approves the owner to request the quantity schedule modification.
            </Step>
            <Step>6. The quantity schedule is modified according to the submitted modification request.</Step>
          </StepsContainer>
        </AccordionItem>
      </AccordionContainer>

      <AccordionContainer>
        <AccordionItem key="10" aria-label={t("qa.10")} title={t("qa.10")}>
          <StepsContainer className="ltr:hidden">
            <Step>
              1. يقوم صاحب الصلاحية (المقاول) بالضغط على &quot;طلب مستخلص&quot; من الاجراءات المتاح تنفيذها على العقد.
            </Step>
            <Step>
              2. يتم تحديث بيانات المستخلص الغير المدفوعة و اضافة رقم المستخلص ، اختيار نوع المستخلص (افتتاحي او جاري او
              ختامي) ، تاريخ الاجراء للمستخلص ، فترة المستخلص (من ،الي).
            </Step>
            <Step>3. يتم اضافة مرفقات المستخلص طبقاً لنوعه.</Step>
            <Step>4. يتم اختيار البنود المستلمة المراد اضافتها فى المستخلص و الحصر الخاص بها.</Step>
            <Step>5. يتم مراجعة البنود و الحصورات المضافة للمستخلص.</Step>
            <Step>6. يتم الضغط على &quot;حفظ&quot; لارسال المستخلص للاعتماد.</Step>
          </StepsContainer>

          <StepsContainer className="rtl:hidden">
            <Step>
              1. The authorized person (contractor) clicks on &quot;Request an extract&quot; from the procedures
              available for implementation on the contract.
            </Step>
            <Step>
              2. The unpaid extract data is updated and the extract number is added, the extract type is selected
              (opening, current or final), the extract procedure date, and the extract period (from, to).
            </Step>
            <Step>3. Extract attachments are added according to its type.</Step>
            <Step>4. The received items to be added to the extract and their inventory are selected.</Step>
            <Step>5. The items and inventory added to the extract are reviewed.</Step>
            <Step>6. &quot;Save&quot; is clicked to send the extract for approval.</Step>
          </StepsContainer>
        </AccordionItem>
      </AccordionContainer>
    </PagesContainer>
  );
};

export default QAAccordions;
