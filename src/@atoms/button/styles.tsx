import styled from "styled-components";

export const BaseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 21px;
  box-sizing: border-box;

  > div {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &.size--small {
    padding: 7px 8px;
    font: var(--font-tiny-heavy);
  }
  &.size--medium {
    padding: 9px 14px;
    font: var(--font-caption-heavy);
    font-weight: 600;
  }

  &.variant--link {
    background-color: transparent !important;
    &.color--primary {
      color: var(--color-primary);
    }
  }

  :not(&.variant--link) {
    &.color--primary {
      color: var(--color-neutral-0);
      background-color: var(--color-primary);
      --main-color: var(--color-primary);
      --main-dark-color: var(--color-primary-dark);
    }
    &.color--secondary {
      color: var(--color-neutral-0);
      background-color: var(--color-secondary);
      --main-color: var(--color-secondary);
      --main-dark-color: var(--color-secondary-dark);
    }
  }

  &.variant--outlined {
    background-color: transparent !important;
    color: var(--main-text-color, var(--main-color)) !important;
    border: 1px solid var(--main-color) !important;
  }
`;
