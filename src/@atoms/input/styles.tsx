import styled from "styled-components";

export const Row = styled.div<{ gap?: string }>`
  display: flex;
  align-items: center;
  margin: 17px 0;

  ${(props) =>
    props.gap ? `gap :${props.gap}` : `justify-content:space-between`}
`;

export const InputWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;

  &.--size-small {
    width: 145px;
  }
  &.--size-medium {
    width: 255px;
  }
`;

export const BaseInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: var(--color-neutral-100);
  padding: 8px 9px;
  box-sizing: border-box;
  border-radius: 13px;
  &::placeholder {
    font: var(--font-caption);
  }
  max-width: 100%;

  &.--state-success {
    color: var(--color-secondary) !important;
    border: 2px solid var(--color-secondary);
  }
`;

export const TexArea = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  background-color: var(--color-neutral-100);
  padding: 8px 9px;
  box-sizing: border-box;
  border-radius: 13px;
  &::placeholder {
    font: var(--font-caption);
  }
  font: var(--font-caption);
  line-height: normal;
  text-overflow: ellipsis;
  height: fit-content;
`;
