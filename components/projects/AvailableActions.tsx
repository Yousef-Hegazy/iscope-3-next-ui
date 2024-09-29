"use client";

import {
  Button,
  Divider,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ScrollShadow,
} from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Fragment, useState } from "react";
import AppTooltip from "../ui/AppTooltip";
import Icon from "../ui/Icon";

const AvailableActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("projects");

  return (
    <Fragment>
      <AppTooltip closeDelay={0} title={t("availableActions")} content={t("availableActions")}>
        <Button variant="light" isIconOnly size="sm" onClick={() => setIsOpen(true)}>
          <Icon icon="stack" />
        </Button>
      </AppTooltip>

      <Modal size="xs" isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent className="absolute end-0 h-full m-0 sm:m-0 overflow-y-auto">
          {(onClose) => (
            <Fragment>
              <ModalHeader>
                <h1>{t("availableActions")}</h1>
              </ModalHeader>

              <Divider />

              <ModalBody as={ScrollShadow} hideScrollBar>
                <Listbox title={t("availableActions")}>
                  <ListboxItem
                    startContent={<Icon icon="stop-circle" className="w-6 h-6" />}
                    onClick={onClose}
                    as={Link}
                    href="#"
                    key="stopRequest"
                    title={t("stopRequestReport")}
                    showDivider
                  />

                  <ListboxItem
                    startContent={<Icon icon="sign" className="w-6 h-6" />}
                    onClick={onClose}
                    as={Link}
                    href="#"
                    key="fineSign"
                    title={t("fineSigningReport")}
                    showDivider
                  />

                  <ListboxItem
                    startContent={<Icon icon="people" className="w-6 h-6" />}
                    onClick={onClose}
                    as={Link}
                    href="#"
                    key="meetingReport"
                    title={t("meetingReport")}
                    showDivider
                  />

                  <ListboxItem
                    startContent={<Icon icon="end" className="w-6 h-6 rtl:rotate-180" />}
                    onClick={onClose}
                    as={Link}
                    href="#"
                    key="worksEndReport"
                    title={t("worksEndReport")}
                    showDivider
                  />

                  <ListboxItem
                    startContent={<Icon icon="add-time" className="w-6 h-6" />}
                    onClick={onClose}
                    as={Link}
                    href="#"
                    key="extendDurationReport"
                    title={t("extendDurationReport")}
                    showDivider
                  />

                  <ListboxItem
                    startContent={<Icon icon="contractor-warn" className="w-6 h-6" />}
                    onClick={onClose}
                    as={Link}
                    href="#"
                    key="contractorWarning"
                    title={t("contractorWarning")}
                    showDivider
                  />

                  <ListboxItem
                    startContent={<Icon icon="final-warning" className="w-6 h-6" />}
                    onClick={onClose}
                    as={Link}
                    href="#"
                    key="finalWarning"
                    title={t("finalWarning")}
                    showDivider
                  />

                  <ListboxItem
                    startContent={<Icon icon="cancel-competition" className="w-6 h-6" />}
                    onClick={onClose}
                    as={Link}
                    href="#"
                    key="cancelCompetitionReport"
                    title={t("cancelCompetitionReport")}
                    showDivider
                  />

                  <ListboxItem
                    startContent={<Icon icon="cancel-finance" className="w-6 h-6" />}
                    onClick={onClose}
                    as={Link}
                    href="#"
                    key="cancelCostReport"
                    title={t("cancelCostReport")}
                    showDivider
                  />

                  <ListboxItem
                    startContent={<Icon icon="cancel-contract" className="w-6 h-6" />}
                    onClick={onClose}
                    as={Link}
                    href="#"
                    key="pullContractReport"
                    title={t("pullContractReport")}
                    showDivider
                  />
                </Listbox>
              </ModalBody>
            </Fragment>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default AvailableActions;
