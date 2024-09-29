"use client";

import { Button, Divider, Listbox, ListboxItem, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Fragment, useState } from "react";
import Icon from "../ui/Icon";

const FutureFeatures = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("quickActions");

  return (
    <Fragment>
      <Button isIconOnly size="sm" radius="full" variant="light" onClick={() => setIsOpen(true)}>
        <Icon icon="ai" />
      </Button>

      <Modal size="xs" hideCloseButton isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent className="absolute start-0 h-full m-0 sm:m-0 overflow-y-auto">
          {(onClose) => (
            <Fragment>
              <ModalHeader>
                <div className="flex flex-row gap-2 items-center justify-between w-full">
                  <p>المستهدفات المستقبلية </p>

                  <Button onClick={onClose} size="sm" isIconOnly variant="light">
                    <Icon icon="close" />
                  </Button>
                </div>
              </ModalHeader>
              <Divider />
              <ModalBody>
                <Listbox>
                  <ListboxItem key="AI" title={t("ai")} startContent={<Icon icon="ai" />} showDivider />

                  <ListboxItem key="IOT" title={t("iot")} startContent={<Icon icon="iot" />} showDivider />

                  <ListboxItem key="Timelines" title={t("timelines")} startContent={<Icon icon="iot" />} showDivider />

                  <ListboxItem key="PowerBI" title={t("powerBI")} startContent={<Icon icon="bi" />} showDivider />

                  <ListboxItem
                    key="Integration"
                    title={t("integration")}
                    startContent={<Icon icon="integration" />}
                    showDivider
                  />

                  <ListboxItem key="GIS" title={t("GIS")} startContent={<Icon icon="gis" />} showDivider />
                </Listbox>
              </ModalBody>
            </Fragment>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default FutureFeatures;
