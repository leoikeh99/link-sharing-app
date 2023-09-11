import React, { useContext } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import ChevronDownIcon from "@/assets/images/icon-chevron-down.svg";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { FlexGroup } from "@/app/styles/LayoutStyles";
import {
  Content,
  Item,
  ScrollDownButton,
  Trigger,
} from "@/app/styles/FormStyles";
import LinkIcon from "../ui/LinkIcon";
import { SocialLinks } from "@/app/constants";
import UserContext from "@/app/context/UserContext";

const Select = ({ link }: { link: UserLink }) => {
  const { changePlatform, links } = useContext(UserContext);

  const onChange = (value: Socials) => changePlatform(link._id, value);

  return (
    <RadixSelect.Root
      value={link.platform || undefined}
      onValueChange={onChange}>
      <Trigger aria-label="Links">
        <RadixSelect.Value placeholder="Select a platform" />
        <RadixSelect.Icon>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </Trigger>
      <RadixSelect.Portal>
        <Content>
          <RadixSelect.ScrollUpButton>
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport>
            <RadixSelect.Group>
              {SocialLinks.map((link) => (
                <SelectItem
                  value={link.id}
                  key={link.id}
                  disabled={
                    links.find((val) => val.platform === link.id) ? true : false
                  }>
                  <FlexGroup $gap="0.75">
                    <LinkIcon iconKey={link.id} />
                    <span>{link.name}</span>
                  </FlexGroup>
                </SelectItem>
              ))}
            </RadixSelect.Group>
          </RadixSelect.Viewport>
          <ScrollDownButton>
            <ChevronDownIcon />
          </ScrollDownButton>
        </Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

const SelectItem = React.forwardRef(
  (
    {
      children,
      value,
      disabled,
    }: { children: React.ReactNode; value: string; disabled?: boolean },
    forwardedRef: React.Ref<HTMLDivElement> | undefined
  ) => {
    return (
      <Item value={value} disabled={disabled} ref={forwardedRef}>
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      </Item>
    );
  }
);

export default Select;
