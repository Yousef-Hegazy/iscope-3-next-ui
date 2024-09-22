"use client";

import { Button, Divider, Listbox, ListboxItem, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import AppTooltip from "../ui/AppTooltip";
import Icon from "../ui/Icon";

const AvailableActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("projects");

  return (
    <>
      <AppTooltip closeDelay={0} title={t("availableActions")} content={t("availableActions")}>
        <Button variant="light" isIconOnly size="sm" onClick={() => setIsOpen(true)}>
          <Icon icon="stack" />
        </Button>
      </AppTooltip>

      <Modal size="xs" isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent className="absolute end-0 h-full m-0 sm:m-0 overflow-y-auto">
          {(onClose) => (
            <>
              <ModalHeader>
                <h1>{t("availableActions")}</h1>
              </ModalHeader>

              <Divider />

              <ModalBody>
                <Listbox title={t("availableActions")}>
                  <ListboxItem
                    startContent={<Icon icon="stop-circle" className="w-6 h-6" />}
                    onClick={onClose}
                    as={Link}
                    href="#"
                    key="stopRequest"
                    title={t("stopRequestReport")}
                  >
                    {t("stopRequestReport")}
                  </ListboxItem>

                  <ListboxItem
                    startContent={<Icon icon="sign" className="w-6 h-6" />}
                    onClick={onClose}
                    as={Link}
                    href="#"
                    key="fineSign"
                    title={t("fineSigningReport")}
                  >
                    {t("fineSigningReport")}
                  </ListboxItem>

                  <ListboxItem
                    startContent={<Icon icon="people" className="w-6 h-6" />}
                    onClick={onClose}
                    as={Link}
                    href="#"
                    key="meetingReport"
                    title={t("meetingReport")}
                  >
                    {t("meetingReport")}
                  </ListboxItem>

                  <ListboxItem
                    startContent={<Icon icon="end" className="w-6 h-6 rtl:rotate-180" />}
                    onClick={onClose}
                    as={Link}
                    href="#"
                    key="worksEndReport"
                    title={t("worksEndReport")}
                  >
                    {t("worksEndReport")}
                  </ListboxItem>
                </Listbox>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AvailableActions;
