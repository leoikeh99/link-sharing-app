import React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import ChevronDownIcon from "@/assets/images/icon-chevron-down.svg";
import GitHubIcon from "@/assets/images/icon-github.svg";
import FEMIcon from "@/assets/images/icon-frontend-mentor.svg";
import TwitterIcon from "@/assets/images/icon-twitter.svg";
import LinkedInIcon from "@/assets/images/icon-linkedin.svg";
import HashnodeIcon from "@/assets/images/icon-hashnode.svg";
import DevToIcon from "@/assets/images/icon-devto.svg";
import StackOverflowIcon from "@/assets/images/icon-stack-overflow.svg";
import CodeWarsIcon from "@/assets/images/icon-codewars.svg";
import GitLabIcon from "@/assets/images/icon-gitlab.svg";
import TwitchIcon from "@/assets/images/icon-twitch.svg";
import YoutubeIcon from "@/assets/images/icon-youtube.svg";
import FacebookIcon from "@/assets/images/icon-facebook.svg";
import FCCIcon from "@/assets/images/icon-freecodecamp.svg";
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

const Select = () => (
  <RadixSelect.Root value="github" name="selectLink">
    <Trigger aria-label="Links">
      <RadixSelect.Value placeholder="Select a Link" />
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
              <SelectItem value={link.id} key={link.id}>
                <FlexGroup $gap="0.75">
                  <LinkIcon iconKey={link.id} />
                  <span>{link.name}</span>
                </FlexGroup>
              </SelectItem>
            ))}
            {/* <SelectItem value="frontendMentor">
              <FlexGroup $gap="0.75">
                <FEMIcon />
                <span>Frontend Mentor</span>
              </FlexGroup>
            </SelectItem>
            <SelectItem value="twitter">
              <FlexGroup $gap="0.75">
                <TwitterIcon />
                <span>Twitter</span>
              </FlexGroup>
            </SelectItem>
            <SelectItem value="linkedin">
              <FlexGroup $gap="0.75">
                <LinkedInIcon />
                <span>Linkedin</span>
              </FlexGroup>
            </SelectItem>
            <SelectItem value="youtube">
              <FlexGroup $gap="0.75">
                <YoutubeIcon />
                <span>Youtube</span>
              </FlexGroup>
            </SelectItem>
            <SelectItem value="facebook">
              <FlexGroup $gap="0.75">
                <FacebookIcon />
                <span>Facebook</span>
              </FlexGroup>
            </SelectItem>
            <SelectItem value="twitch">
              <FlexGroup $gap="0.75">
                <TwitchIcon />
                <span>Twitch</span>
              </FlexGroup>
            </SelectItem>
            <SelectItem value="devto">
              <FlexGroup $gap="0.75">
                <DevToIcon />
                <span>Dev.to</span>
              </FlexGroup>
            </SelectItem>
            <SelectItem value="codewars">
              <FlexGroup $gap="0.75">
                <CodeWarsIcon />
                <span>Codewars</span>
              </FlexGroup>
            </SelectItem>
            <SelectItem value="freeCodeCamp">
              <FlexGroup $gap="0.75">
                <FCCIcon />
                <span>FreeCodecamp</span>
              </FlexGroup>
            </SelectItem>
            <SelectItem value="gitlab">
              <FlexGroup $gap="0.75">
                <GitLabIcon />
                <span>GitLab</span>
              </FlexGroup>
            </SelectItem>
            <SelectItem value="hashnode">
              <FlexGroup $gap="0.75">
                <HashnodeIcon />
                <span>Hashnode</span>
              </FlexGroup>
            </SelectItem>
            <SelectItem value="stackOverflow">
              <FlexGroup $gap="0.75">
                <StackOverflowIcon />
                <span>Stack Overflow</span>
              </FlexGroup>
            </SelectItem> */}
          </RadixSelect.Group>
        </RadixSelect.Viewport>
        <ScrollDownButton>
          <ChevronDownIcon />
        </ScrollDownButton>
      </Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
);

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
